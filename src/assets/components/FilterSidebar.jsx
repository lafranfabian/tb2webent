import React from "react";
import "./FilterSidebar.css";

export default function FilterSidebar({ isOpen, onClose }) {
  return (
    <div className={`filter-sidebar ${isOpen ? "open" : ""}`}>
      <div className="filter-header">
        <h3>Filter</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="filter-section">
        <h4>Metode Pembayaran</h4>
        <div className="filter-buttons">
          <button>Tunai</button>
          <button>Online</button>
          <button>Tunai & Online</button>
          <button>Gratis</button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Gender</h4>
        <div className="filter-buttons">
          <button>Laki-laki</button>
          <button>Perempuan</button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Tipe Aktivitas</h4>
        <div className="filter-buttons">
          <button>Coaching</button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Jenis Host</h4>
        <div className="filter-buttons">
          <button>Superhost</button>
        </div>
      </div>

      <div className="filter-section">
        <h4>Waktu Pertandingan</h4>
        <div className="filter-buttons grid">
          <button>06–10<br />Pagi</button>
          <button>11–14<br />Siang</button>
          <button>15–18<br />Sore</button>
          <button>19–23<br />Malam</button>
        </div>
      </div>
    </div>
  );
}
