import React, { useState, useEffect } from 'react';
import socket from '../socket';

function PrivateChat() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('privateMessage', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('privateMessage');
    };
  }, []);

  const sendMessage = () => {
    if (recipient && message.trim()) {
      socket.emit('privateMessage', { recipient, message });
      setMessage('');
    }
  };

  return (
    <div className="private-chat">
      <h2>Private Chat</h2>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default PrivateChat;
