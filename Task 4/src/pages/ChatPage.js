import React from 'react';
import { Link } from 'react-router-dom';

function ChatPage() {
  return (
    <div className="chat-page">
      <h2>Chat</h2>
      <p>Welcome to the chat page. Choose an option below:</p>
      <Link to="/chatroom" className="button">Join a Chat Room</Link>
      <Link to="/privatechat" className="button">Start a Private Chat</Link>
    </div>
  );
}

export default ChatPage;
