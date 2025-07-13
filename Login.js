// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setDarkMode(theme === 'dark');
  }, []);

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCred.user);
      setMsg('✅ Logged in!');
      navigate('/');
    } catch (error) {
      setMsg(`❌ ${error.message}`);
    }
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : ''}`}>
      <h2>🔓 Login to Study Buddy</h2>
      <input
        type="email"
        placeholder="📧 Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="🔒 Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
