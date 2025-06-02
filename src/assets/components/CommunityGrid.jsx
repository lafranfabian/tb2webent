import React from 'react';
import './CommunityGrid.css';

const communities = [
  { name: 'Basketball', image: '../src/assets/1.png' },
  { name: 'Badminton', image: '../src/assets/4.png' },
  { name: 'Futsal', image: '../src/assets/5.png' },
  { name: 'Boxing', image: '../src/assets/6.png' },
  { name: 'Softball', image: '../src/assets/Softball.png' }
];

export default function CommunityGrid() {
  return (
    <div className="community">
      <h2>Explore Various Community</h2>
      <div className="community-grid">
        {communities.map((c, index) => (
          <div key={index} className="community-card">
            <img src={c.image} alt={c.name} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
