const mongoose = require('mongoose');
const config = require('./config'); // Import configuration settings

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from configuration
    await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Optional: For handling unique indexes (mongoose v5+)
      useFindAndModify: false // Optional: For avoiding deprecated methods
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure code
  }
};

// Export the connectDB function to be used elsewhere in the application
module.exports = connectDB;
