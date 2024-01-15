const mongoose = require('mongoose');

// Define a Mongoose schema for the chatbot
const chatBotSchema = new mongoose.Schema({
    // 'prompt' field with type String, required to be present
    prompt: { type: String, required: true },

    // 'response' field with type String, required to be present
    response: { type: String, required: true },

    // 'timestamp' field with type Date, defaults to the current date and time
    timestamp: { type: Date, default: Date.now },
});

// Create a Mongoose model named 'ChatHistory' based on the defined schema
module.exports = mongoose.model('ChatHistory', chatBotSchema);
