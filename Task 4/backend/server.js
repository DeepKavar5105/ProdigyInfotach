const express = require('express');
const http = require('http');
const socketIo = require('socket.io'); // Import socket.io
const connectDB = require('./config/dbConfig'); // Import database configuration
const config = require('./config/config'); // Import general configuration
const app = express();

// Connect to the database
connectDB();

// Create an HTTP server and pass the Express app to it
const server = http.createServer(app);

// Initialize Socket.IO with the server
const io = socketIo(server);

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('message', (message) => {
    console.log('Message received:', message);
    io.emit('message', message); // Broadcast message to all clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Define your routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/files', require('./routes/fileRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));

// Start the server
const port = config.port || 5000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
