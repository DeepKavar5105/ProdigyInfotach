import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ChatRoom from './components/ChatRoom';
import FileUpload from './components/FileUpload';
import Notifications from './components/Notifications';
import PrivateChat from './components/PrivateChat';
import './App.css'; // Import app-specific styles if needed

function App() {
  return (
    <div className="App">
      <header>
        <h1>UsChat</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chat">Chat</a>
        </nav>
      </header>
      <main>
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/privatechat" element={<PrivateChat />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
