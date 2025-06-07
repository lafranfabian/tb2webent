import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Atos",
    location: "Tangerang",
    rating: 5,
    review:
      "SportHive sangat membantu cari event olahraga. Dulu bingung infonya susah, sekarang tinggal klik langsung gabung. Fiturnya juga responsif dan sistem pertandingannya lancar!",
    image: "/assets/testimonial1.jpg",
  },
  // duplikat untuk contoh dummy
  {
    name: "Atos",
    location: "Tangerang",
    rating: 5,
    review:
      "SportHive sangat membantu cari event olahraga. Dulu bingung infonya susah, sekarang tinggal klik langsung gabung. Fiturnya juga responsif dan sistem pertandingannya lancar!",
    image: "/assets/testimonial1.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <h2>Testimonial</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-avatar" />
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-location">{t.location}</div>
            <div className="testimonial-rating">
              {"★".repeat(t.rating)}
            </div>
            <p className="testimonial-review">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
