const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');

// Enable CORS
app.use(cors({
    origin: process.env.CLIENT_URL
}));

// Simple Route
app.get("/", (req, res) => {
    res.send("Welcome to the learning space.");
});

// Routes
const tutorialRoute = require('./routes/tutorial');
app.use("/tutorial", tutorialRoute);

let port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});