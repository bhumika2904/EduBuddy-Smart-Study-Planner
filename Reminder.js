import React, { useEffect } from 'react';

const Reminder = () => {
  // Ask for notification permission when component loads
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          alert('Notifications are blocked. You can enable them in your browser settings.');
        }
      });
    }
  }, []);

  // Function to trigger a notification
  const notify = (message) => {
    if (Notification.permission === 'granted') {
      new Notification(message);
    }
  };

  // Trigger daily reminder 5 minutes after app opens
  useEffect(() => {
    const delay = 5 * 60 * 1000; // 5 minutes
    const timer = setTimeout(() => {
      notify("📚 Time to focus on your study goals!");
    }, delay);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>
      <h3>🔔 Study Reminder Active</h3>
      <p>You’ll get a reminder 5 minutes after opening the app.</p>
    </div>
  );
};

export default Reminder;
