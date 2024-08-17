import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your backend URL

const useSocket = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Handle socket connection events
    socket.on('connect', () => {
      setConnected(true);
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      setConnected(false);
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.disconnect();
    };
  }, []);

  return { socket, connected };
};

export default useSocket;
