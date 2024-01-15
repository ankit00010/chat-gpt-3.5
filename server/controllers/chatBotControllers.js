// Import the OpenAI API client and ChatHistory model
const openai = require('../config/openaiConfig');
const ChatHistory = require('../models/ChatHistory');

// Controller function to generate a chatbot response
const generateResponse = async (req, res) => {
    try {
        // Extract the user's input (prompt) from the request body
        const prompt = req.body.prompt;

        // Call the OpenAI API to generate a response
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            stream: true,
        });

        // Initialize an empty string to concatenate response chunks
        let responseText = "";

        // Iterate over response stream chunks and concatenate the content
        for await (const chunk of stream) {
            responseText += chunk.choices[0]?.delta?.content || "";
        }

        // Save the conversation (prompt and response) to the database
        const chatEntry = new ChatHistory({
            prompt: prompt,
            response: responseText,
        });
        await chatEntry.save();

        // Respond with the generated text as JSON
        res.json({ response: responseText });
    } catch (error) {
        // Handle errors by logging and sending a 500 internal server error response
        console.error(error);
        res.status(500).json({ error: "Failed to generate response" });
    }
};

// Export the controller function for use in routes
module.exports = { generateResponse };
