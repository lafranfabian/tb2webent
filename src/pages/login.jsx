import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import img4 from '../assets/4.png';
import supabase from '../supabase/client';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/'); // redirect ke halaman utama
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={img4} alt="Character Left" className="login-image-left" />
        <div className="login-text">
          <h3 className="login-subtitle">Make Your Game More Fun And Competitive</h3>
          <h1 className="login-title">SportHive</h1>
        </div>
        <img src={img4} alt="Character Right" className="login-image-right flipped" />
      </div>

      <div className="login-right">
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}
        <p className="signup-text">
          Don’t Have an Account? <a href="/register" className="signup-link">Sign up here</a>
        </p>
      </div>
    </div>
  );
}
