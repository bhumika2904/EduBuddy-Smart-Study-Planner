// ✅ src/components/ExamReminder.js
import React, { useState, useEffect } from 'react';

const ExamReminder = () => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('examReminders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('examReminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = () => {
    if (subject && date && time) {
      const newReminder = { subject, date, time };
      setReminders([...reminders, newReminder]);
      setSubject('');
      setDate('');
      setTime('');
    }
  };

  const deleteReminder = (index) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
  };

  return (
    <div>
      <h3>📝 Exam Reminders</h3>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={addReminder}>Add</button>
      <ul>
        {reminders.map((r, i) => (
          <li key={i}>
            {r.subject} - {r.date} at {r.time}
            <button onClick={() => deleteReminder(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamReminder;
