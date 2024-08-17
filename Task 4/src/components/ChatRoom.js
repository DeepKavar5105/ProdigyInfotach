import React, { useState, useEffect } from 'react';
import socket from '../socket'; // Ensure you have the correct path to your socket connection

function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('general'); // Default room

  useEffect(() => {
    // Join the chat room
    socket.emit('joinRoom', { room, user: 'User' }); // Replace 'User' with dynamic username

    // Listen for incoming messages
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      // Clean up on component unmount
      socket.off('message');
    };
  }, [room]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chatMessage', { text: message, room });
      setMessage('');
    }
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <div className="chat-room">
      <h2>Chat Room: {room}</h2>
      <select value={room} onChange={handleRoomChange}>
        <option value="general">General</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        {/* Add more room options here */}
      </select>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
