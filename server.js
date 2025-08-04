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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
