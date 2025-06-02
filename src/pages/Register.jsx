import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/client';
import './Register.css';
import img3 from '../assets/3.png';
import img8 from '../assets/8.png';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nama: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleRegister = async (e) => {
  e.preventDefault();
  setError('');

  const { email, password, nama } = formData;

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    setError(signUpError.message);
    return;
  }

  const session = data.session;
  const userId = data?.user?.id || session?.user?.id;

  if (!session) {
    setError('Pendaftaran berhasil, silakan login terlebih dahulu.');
    return;
  }

  // Masukkan ke tabel profiles
  const { error: profileError } = await supabase.from('profiles').insert([
    {
      id: userId,
      fullname: nama, // pastikan sesuai dengan nama kolom di Supabase
    },
  ]);

  if (profileError) {
    setError(profileError.message);
  } else {
    navigate('/profile');
  }
};


  return (
    <div className="register-container">
      <div className="form-section">
        <h1 className="logo-title">SportHive</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <input type="text" name="nama" placeholder="Nama" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        <p className="login-link">
          Already Have an Account? <a href="/login">Sign in here</a>
        </p>
      </div>

      <div className="pink-box">
        <p className="tagline">Make Your Game More Fun And Competitive</p>
        <h1 className="brand">SportHive</h1>
        <img src={img3} alt="Left Character" className="left-image" />
        <img src={img8} alt="Right Character" className="right-image" />
      </div>
    </div>
  );
}
