import React from 'react';
import './EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-header">
        <strong>{event.organizer}</strong>
      </div>
      <div className="event-title">{event.title}</div>
      <div className="event-info">
        📍 {event.location}<br />
        🕒 {event.date}<br />
        👥 {event.participants}
      </div>
      <div className="event-footer">
        <span>Rp.{event.price.toLocaleString()}</span>
        <button>Gabung</button>
      </div>
    </div>
  );
}
