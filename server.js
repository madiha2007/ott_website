const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const router = express.Router();

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

// Replace with your actual connection string (keep password URL-encoded)
mongoose.connect(
    'mongodb+srv://madiha:maddu%400000@cluster0.zpxwtrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
    {
        dbName: "visitorDB",
    }
)
.then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a schema for visitors
const visitorSchema = new mongoose.Schema({
  name: String,
  ip: String,
  userAgent: String,
  timestamp: Date,
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Create a schema for users
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },  // For production, hash this!
  plan: { type: String, default: 'Free' },
});

const User = mongoose.model('User', userSchema);

// Log visitor info
app.post('/log-visitor', async (req, res) => {
    try {

        const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
        const { name, userAgent } = req.body;

        const visitor = new Visitor({
            name: name || "Anonymous",
            ip,
            userAgent,
            timestamp: new Date(),
        });

    await visitor.save();
    res.status(201).json({ message: 'Visitor logged' });
  } catch (error) {
    console.error('Error logging visitor:', error);
    res.status(500).json({ message: 'Failed to log visitor' });
  }
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, plan } = req.body;

    // if(!name || !email || !password || !plan) {
    //   return res.status(400).json({ message: 'Missing fields' });
    // }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    // Hash the password (in production, use a stronger salt and work factor)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user (password should be hashed in production)
    const user = new User({ name, email, password: hashedPassword, plan });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', success: true });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

//login route
app.post('/login', async (req, res) => {
  try{
      const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
          return res.json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.json({ success: false, message: "Invalid email or password"});
        }

        //create JWT token
        const token = jwt.sign({ id: user.id}, 'secretkey', { expiresIn: '1h'});
        res.json({ success: true, token, message: "Login successful"});
      } 
      catch (err) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
    });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
