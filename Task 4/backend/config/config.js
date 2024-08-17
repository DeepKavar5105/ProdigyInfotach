require('dotenv').config(); // Load environment variables from .env file

const config = {
  port: process.env.PORT || 5000,
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/uschat', // Default URI if not specified
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    expiresIn: '1h',
  },
  // Other configurations
};

module.exports = config;
