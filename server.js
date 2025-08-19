// 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  'mongodb+srv://madiha:maddu%400000@cluster0.zpxwtrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
  { dbName: "visitorDB" }
)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// Schemas
const visitorSchema = new mongoose.Schema({
  name: String,
  ip: String,
  userAgent: String,
  timestamp: Date,
});
const Visitor = mongoose.model('Visitor', visitorSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  plan: { type: String, default: 'Free' },
});
const User = mongoose.model('User', userSchema);

// Visitor logging
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

// Signup
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, plan } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, plan });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', success: true });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ 
      success: true, 
      token, 
      user: { name: user.name, email: user.email, plan: user.plan },
      message: "Login successful"
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// JWT middleware
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ success: false, message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ success: false, message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
}

// Protected route
app.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) 
      return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (err) {
    console.error('Fetch user error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
