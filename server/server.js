// Import necessary packages and modules
const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

// Import database connection function
const DB = require("./config/dbConnection");

// Import routes for the chatbot
const chatBotRoutes = require("./routes/chatBotRoutes");

// Connect to the database
DB();

// Parse JSON requests
app.use(express.json());

// Set up middleware and routes
// (Additional middleware and routes can be added here as needed)
const port = process.env.PORT || 5001;

// Use the chatBotRoutes for requests starting with "/api/chatBot"
app.use("/api/chatBot", chatBotRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
