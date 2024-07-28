import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from './routes/user.route.js';
import cors from 'cors';

// Connect to MongoDB
mongoose.connect('mongodb+srv://hoodieraw95:e9bgyWfe9t0R05ng@fosterhome.hxvsfvu.mongodb.net/?retryWrites=true&w=majority&appName=fosterHome')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
const app = express();
app.use("/api/user", userRoute);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Define a schema and model
const waitingListSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const WaitingList = mongoose.model('WaitingList', waitingListSchema);

// API route to handle form submissions
app.post('/api/waitinglist', async (req, res) => {
    const { email, name } = req.body;
    const newEntry = new WaitingList({ email, name });
    try {
        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

