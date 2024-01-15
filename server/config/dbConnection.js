// Import the Mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Use Mongoose's connect method to establish a connection to the database
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);

        // Log a successful connection message, including the host and database name
        console.log('Database connected : ', connect.connection.host, connect.connection.name);

    } catch (error) {
        // Log any errors that occur during the database connection attempt
        console.error(error);

        // Exit the process with a non-zero status code to indicate an error
        process.exit(1);
    }
}

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
