// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.body.className = !darkMode ? 'dark' : '';
  };

  return (
    <nav className="navbar">
      <h2>📚 Study Buddy</h2>
      <ul>
        <li><a href="#quote">Quote</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#timer">Timer</a></li>
        <li><a href="#exam">Exams</a></li>

        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>

        {user ? (
          <>
            <li><span>👋 {user.email}</span></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
