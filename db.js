const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hoodieraw95:e9bgyWfe9t0R05ng@fosterhome.hxvsfvu.mongodb.net/?retryWrites=true&w=majority&appName=fosterHome', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));