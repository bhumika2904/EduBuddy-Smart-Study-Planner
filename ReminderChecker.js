import { useEffect } from 'react';

const ReminderChecker = () => {
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const stored = JSON.parse(localStorage.getItem('examReminders')) || [];

      stored.forEach((reminder) => {
        const reminderTime = new Date(`${reminder.date}T${reminder.time}`);
        const diff = reminderTime.getTime() - now.getTime();

        if (diff > 0 && diff < 60000 && Notification.permission === 'granted') {
          new Notification(`📚 Reminder: ${reminder.subject} exam is at ${reminder.time}`);
        }
      });
    };

    // Ask for permission once
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    // Check every 30 seconds
    const interval = setInterval(checkReminders, 30000);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ReminderChecker;
