// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg('✅ Account created! You can log in.');
    } catch (error) {
      setMsg(`❌ ${error.message}`);
    }
  };

  return (
    <div>
      <h2>🔐 Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{msg}</p>
    </div>
  );
};

export default SignUp;
