import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { FiSliders } from "react-icons/fi";
import { FaFutbol, FaBasketballBall } from "react-icons/fa";
import { GiSoccerBall, GiTennisRacket } from "react-icons/gi";
import { MdSportsTennis, MdSportsSoccer } from "react-icons/md";
import "./Searchbar.css";

export default function SearchBar() {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedPayments, setSelectedPayments] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedHost, setSelectedHost] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  const toggleSelection = (value, selectedArray, setSelectedArray) => {
    setSelectedArray((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-field">
          <BsSearch />
          <input type="text" placeholder="Pilih Acara Mabar" />
        </div>
        <div className="search-field">
          <BiCategoryAlt />
          <input
            type="text"
            placeholder="Pilih Kota"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
        </div>
        <button className="filter-toggle-button" onClick={toggleFilter}>
          <FiSliders />
        </button>
        <button className="search-button">Cari</button>
      </div>

      {showFilter && (
        <div className="filter-modal-overlay" onClick={() => setShowFilter(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowFilter(false)}>×</button>

            <h3>Metode Pembayaran</h3>
            <div className="filter-group">
              {["Tunai", "Online", "Tunai & Online", "Gratis"].map((method) => (
                <button
                  key={method}
                  className={`activity-button ${selectedPayments.includes(method) ? "selected" : ""}`}
                  onClick={() => toggleSelection(method, selectedPayments, setSelectedPayments)}
                >
                  {method}
                </button>
              ))}
            </div>

            <h3>Gender</h3>
            <div className="filter-group">
              {["Laki-laki", "Perempuan","Semuanya"].map((gender) => (
                <button
                  key={gender}
                  className={`activity-button ${selectedGender.includes(gender) ? "selected" : ""}`}
                  onClick={() => toggleSelection(gender, selectedGender, setSelectedGender)}
                >
                  {gender}
                </button>
              ))}
            </div>

            <h3>Tipe Aktivitas</h3>
            <div className="activity-options">
              {[
                { name: "Badminton", icon: <GiTennisRacket /> },
                { name: "Padel", icon: <MdSportsTennis /> },
                { name: "Basket", icon: <FaBasketballBall /> },
                { name: "Futsal", icon: <GiSoccerBall /> },
                { name: "Mini Soccer", icon: <MdSportsSoccer /> },
                { name: "Bulu Tangkis", icon: <GiTennisRacket /> },
                { name: "Sepak Bola", icon: <FaFutbol /> },
              ].map((activity) => (
                <button
                  key={activity.name}
                  className={`activity-button ${selectedActivities.includes(activity.name) ? "selected" : ""}`}
                  onClick={() => toggleSelection(activity.name, selectedActivities, setSelectedActivities)}
                >
                  {activity.icon}
                  <span>{activity.name}</span>
                </button>
              ))}
            </div>

            <h3>Jenis Host</h3>
            <div className="filter-group">
              {["Superhost"].map((host) => (
                <button
                  key={host}
                  className={`activity-button ${selectedHost.includes(host) ? "selected" : ""}`}
                  onClick={() => toggleSelection(host, selectedHost, setSelectedHost)}
                >
                  {host}
                </button>
              ))}
            </div>

            <h3>Waktu Pertandingan</h3>
            <div className="filter-group">
              {["06-10", "11-14", "15-18", "19-23"].map((time) => (
                <button
                  key={time}
                  className={`activity-button ${selectedTime.includes(time) ? "selected" : ""}`}
                  onClick={() => toggleSelection(time, selectedTime, setSelectedTime)}
                >
                  {time}
                </button>
              ))}
            </div>

            <button
              className="apply-button"
              onClick={() => {
                console.log("Filter diterapkan:", {
                  payments: selectedPayments,
                  gender: selectedGender,
                  activities: selectedActivities,
                  host: selectedHost,
                  time: selectedTime,
                  location: selectedLocation,
                });
                setShowFilter(false);
              }}
            >
              Terapkan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
