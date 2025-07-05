const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const copRoute = require('./routes/cop');

app.use(express.json());
// Enable CORS
app.use(cors({
    origin: process.env.CLIENT_URL
}));

// Simple Route
app.get("/", (req, res) => {
    res.send("Welcome to the learning space.");
});

// Routes

const CopRoute = require('./routes/cop');
app.use("/cop", copRoute);

let port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});