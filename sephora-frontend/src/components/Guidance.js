import React from "react";
import "../styles/Guidance.css";

const Guidance = () => {
  const items = [
    { title: "Blush", icon: "💄" },
    { title: "Serums", icon: "🧴" },
    { title: "Hair Styling & Treatments", icon: "💇" },
    { title: "Lip", icon: "💋" },
    { title: "Setting Spray and Powder", icon: "🧑‍🎤" },
    { title: "Foundation", icon: "🏺" },
    { title: "Trending on Social", icon: "⭐" },
  ];

  return (
    <div className="guidance-container">
      <h2>Need a Little Guidance?</h2>
      <p>Check out what's popular now.</p>
      <div className="guidance-cards">
        {items.map((item, index) => (
          <div key={index} className="guidance-card">
            <div className="guidance-icon">{item.icon}</div>
            <p className="guidance-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidance;
