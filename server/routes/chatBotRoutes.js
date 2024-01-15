// Import the Express framework
const express = require('express');

// Create a router instance
const router = express.Router();

// Import the controller for handling chatbot requests
const chatGPTController = require('../controllers/chatBotControllers');

//Post request to handle the response from the user
router.post('/', chatGPTController.generateResponse);

// Export the router 
module.exports = router;
