import React, { useState, useEffect } from 'react';
import ProgressChart from './ProgressChart';
import './GoalTracker.css'; // optional: for custom styles

const GoalTracker = () => {
  const [goals, setGoals] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('goals');
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (input.trim() !== '') {
      setGoals([...goals, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].done = !updatedGoals[index].done;
    setGoals(updatedGoals);
  };

  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div>
      <h3>🎯 Today's Study Goals</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your goal"
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button onClick={addGoal} style={{ padding: '8px 16px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {goals.map((goal, i) => (
          <li
            key={i}
            style={{
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f0f0f0',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            <span
              onClick={() => toggleGoal(i)}
              style={{
                textDecoration: goal.done ? 'line-through' : 'none',
                cursor: 'pointer',
                flexGrow: 1,
              }}
            >
              {goal.text}
            </span>
            <button
              onClick={() => deleteGoal(i)}
              style={{
                background: '#e53935',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '5px 10px',
                marginLeft: '10px',
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* 📊 Live progress chart */}
      <ProgressChart goals={goals} />
    </div>
  );
};

export default GoalTracker;
