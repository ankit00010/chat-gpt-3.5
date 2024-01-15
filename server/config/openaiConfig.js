// Import the OpenAI SDK
const OpenAI = require('openai');

// Create an instance of the OpenAI client with the provided API key
const openai = new OpenAI({
    apiKey: process.env.API_KEY, // API key retrieved from environment variables
});

// Export the configured OpenAI client for use in other parts of the application
module.exports = openai;
