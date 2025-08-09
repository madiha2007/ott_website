const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

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
  email: { type: String, unique: true },
  password: String,  // For production, hash this!
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

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user (password should be hashed in production)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
