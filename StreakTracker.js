import React, { useEffect, useState } from 'react';

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState(null);
  const [badge, setBadge] = useState('');

  useEffect(() => {
    const savedStreak = localStorage.getItem('streak');
    const savedDate = localStorage.getItem('lastStudyDate');
    if (savedStreak) setStreak(parseInt(savedStreak));
    if (savedDate) setLastDate(savedDate);

    checkToday();
  }, []);

  const checkToday = () => {
    const today = new Date().toLocaleDateString();
    const savedDate = localStorage.getItem('lastStudyDate');

    if (savedDate === today) return; // already counted today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toLocaleDateString();

    if (savedDate === yStr) {
      // continued streak
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('streak', newStreak);
    } else {
      // missed day – reset
      setStreak(1);
      localStorage.setItem('streak', 1);
    }

    setLastDate(today);
    localStorage.setItem('lastStudyDate', today);
  };

  useEffect(() => {
    if (streak >= 10) setBadge('🏆 Study Legend (10 Days)');
    else if (streak >= 5) setBadge('🥇 Focus Pro (5 Days)');
    else if (streak >= 3) setBadge('🔥 Streak Starter (3 Days)');
    else setBadge('');
  }, [streak]);

  return (
    <div>
      <h2>🔥 Study Streak</h2>
      <p>You’ve studied <strong>{streak}</strong> day(s) in a row!</p>
      {badge && <p>🏅 Badge Unlocked: <strong>{badge}</strong></p>}
    </div>
  );
};

export default StreakTracker;
