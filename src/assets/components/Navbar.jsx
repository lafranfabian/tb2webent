import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <a href="#">Sewa Lapangan</a>
        <a href="#">Main Bareng</a>
        <a href="#">Home</a>
        <a href="/login" className="login-btn">Login</a>
      </div>
    </div>
  );
}
