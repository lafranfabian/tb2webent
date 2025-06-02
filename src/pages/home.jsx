import React, { useEffect, useState } from 'react';
import Navbar from '../assets/components/Navbar';
import SearchBar from '../assets/components/Searchbar';
import EventCard from '../assets/components/EventCard';
import CommunityGrid from '../assets/components/CommunityGrid';
import ActivityCard from '../assets/components/ActivityCard';
import supabase from '../supabase/client';
import './home.css';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('event').select('*');
      if (!error) setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="../src/assets/BlobShapeblob.png"
          alt="Blob Background"
          className="hero-blob"
        />

        <div className="hero-content">
          <div className="hero-text">
            <h2 style={{ color: 'white', fontWeight: '400' }}>
              Make Your Game More Fun And Competitive
            </h2>
            <h1 style={{ color: 'white', fontWeight: '800' }}>SportHive</h1>
          </div>
          <img
            src="../src/assets/3.png"
            alt="Hero Character"
            className="hero-image"
            style={{ height: '200px', marginLeft: '400px', marginTop: '30px' }}
          />
          <img
            src="../src/assets/8.png"
            alt="Hero Character"
            className="hero-image2"
            style={{ height: '200px', marginLeft: '10px', marginTop: '30px' }}
          />
        </div>
      </div>

      {/* Centered Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <SearchBar />
      </div>

      {/* Activity Section */}
      <div className="activity-section">
        <h2 className="section-title">Activity</h2>
        <ActivityCard events={events} />
      </div>

      {/* Community Section */}
      <CommunityGrid />
    </div>
  );
}
