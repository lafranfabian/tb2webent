import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CommunityGrid.css";

const communities = [
  { name: "Basketball", image: "../src/assets/1.png" },
  { name: "Badminton", image: "../src/assets/4.png" },
  { name: "Futsal", image: "../src/assets/5.png" },
  { name: "Boxing", image: "../src/assets/6.png" },
  { name: "Softball", image: "../src/assets/Softball.png" },
];

export default function CommunityGrid() {
  return (
    <div className="community-carousel-container">
      <h2>Explore Various Community</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="community-swiper"
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {communities.map((c, index) => (
          <SwiperSlide key={index}>
            <div
              className="community-card"
              onClick={() => alert(`Kamu memilih: ${c.name}`)}
            >
              <img src={c.image} alt={c.name} className="community-img" />
              <p className="community-info">{c.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
