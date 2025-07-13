// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 min
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div>
      <h2>Study Timer</h2>
      <p>{formatTime()}</p>
      <button onClick={() => setActive(!active)}>{active ? 'Pause' : 'Start'}</button>
      <button onClick={() => setTimeLeft(25 * 60)}>Reset</button>
    </div>
  );
};

export default Timer;
