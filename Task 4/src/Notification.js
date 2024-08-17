import React, { useState, useEffect } from 'react';
import socket from './socket';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  return (
    <div>
      {notifications.map((note, index) => <p key={index}>{note}</p>)}
    </div>
  );
}

export default Notifications;
