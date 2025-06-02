import React, { useEffect, useState } from 'react';
import supabase from '../supabase/client';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (!error) setProfile(data);
    }

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-left-menu">
        <p>Profile</p>
        <p>Booking</p>
        <p>Host</p>
      </div>

      <div className="profile-main">
        <div className="profile-header">
          <img src="/default-profile.png" alt="profile" className="profile-img" />
          <input type="text" value={profile.fullname} readOnly />
          <span>@{profile.username || 'username'}</span>
        </div>
        <div className="profile-bio">
          <textarea placeholder="Bio..." />
          <button>Save Changes</button>
        </div>

        <div className="event-history">
          <h3>Event History</h3>
          <div className="event-card">
            <p>Mabar Badminton Beginner Level</p>
            <p>Sabtu, 22 Juni 2024, 18:00 - 20:00</p>
            <p>Badminton Hall, Kab. Tangerang</p>
          </div>
        </div>

        <button className="finish-button">Selesai</button>
      </div>

      <div className="profile-sidebar">
        <div className="level-circle">10</div>
        <div className="badges-box">
          <p>We Are Online</p>
        </div>
      </div>
    </div>
  );
}
