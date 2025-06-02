import React, { useEffect, useState } from 'react';
import supabase  from '../../supabase/client';
import './ActivityCard.css';

export default function ActivityCard() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from('event')
        .select(`
          id,
          title,
          location,
          price,
          participant_count,
          profiles (
            name,
            avatar_url
          )
        `);

      if (!error) {
        setActivities(data);
      } else {
        console.error('Fetch error:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="activity-container">
      {activities.map((activity) => (
        <div className="activity-card" key={activity.id}>
          <div className="activity-header">
            <img
              src={activity.profiles?.avatar_url || '/default-avatar.png'}
              alt="avatar"
              className="avatar"
            />
            <div>
              <div className="creator-name">{activity.profiles?.name || 'Unknown'}</div>
              <div className="activity-title">{activity.title}</div>
            </div>
          </div>
          <div className="activity-info">
            <div>📍 {activity.location}</div>
            <div>👥 {activity.participant_count} orang</div>
          </div>
          <div className="activity-footer">
            <div className="price">Rp. {Number(activity.price).toLocaleString('id-ID')},00</div>
            <button className="join-button">Gabung</button>
          </div>
        </div>
      ))}
    </div>
  );
}
