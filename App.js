// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import GoalTracker from './components/GoalTracker';
import Quote from './components/Quote';
import Timer from './components/Timer';
import ExamReminder from './components/ExamReminder';
import ReminderChecker from './components/ReminderChecker';
import StreakTracker from './components/StreakTracker';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import './App.css';

function StudyDashboard() {
  return (
    <div className="App">
      <ReminderChecker />
      <header>
        <h1>📚 Virtual AI Study Buddy</h1>
        
      </header>
      <Quote />
      <StreakTracker />
      <GoalTracker />
      <Timer />
      <ExamReminder />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    // Firebase auth listener
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={user ? <StudyDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
