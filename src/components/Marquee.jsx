import React, { useEffect } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";
// Make sure you have the corresponding CSS file for the card design
// imported in your project (e.g., in App.jsx or index.js)
import "../infinite-marquee.css"; 

// --- Mentor Data ---
const mentors = [
  {
    name: "Naval Ravikant",
    role: "Co-founder & Chairman",
    company: "AngelList",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=7",
  },
  {
    name: "Paul Graham",
    role: "Co-founder",
    company: "Y Combinator",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Ann Miura-Ko",
    role: "Co-founding Partner",
    company: "Floodgate",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Vinod Khosla",
    role: "Founder",
    company: "Khosla Ventures",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Aileen Lee",
    role: "Founder & Managing Partner",
    company: "Cowboy Ventures",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=35",
  },
  {
    name: "Reid Hoffman",
    role: "Co-founder",
    company: "LinkedIn",
    // Using a single, reliable placeholder URL
    pictureUrl: "https://i.pravatar.cc/300?img=60",
  },
];

const MentorMarquee = () => {
  useEffect(() => {
    const marquee = new InfiniteMarquee({
      element: '.marquee-container',
      speed: 200000,
      smoothEdges: true,
      direction: 'left',
      pauseOnHover: true,
      duplicateCount: 2,
      mobileSettings: {
        direction: 'left',
        speed: 200000
      },
      on: {
        beforeInit: () => console.log('Marquee: Not Yet Initialized'),
        afterInit: () => console.log('Marquee: Initialized'),
      }
    });

    return () => marquee.destroy(); // cleanup
  }, []);

  return (
    <div className="marquee-container">
      {mentors.map((mentor, index) => (
        <div key={index} className="profile-card">
          <div className="card-header">
            <div className="profile-image">
              <img src={mentor.pictureUrl} alt={`Portrait of ${mentor.name}`} />
            </div>
            <div className="name">
              <h2>{mentor.name}</h2>
            </div>
          </div>
          <div className="card-body">
            <div className="details">
              <p className="role">{mentor.role}</p>
              <p className="company">{mentor.company}</p>
            </div>
            <div className="company-logo">
              {/* 1. NEW: Cartoonish Bulb SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                <path d="M12 2C8.69 2 6 4.69 6 8c0 2.13.96 4.03 2.45 5.29L8 15.5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5l-.45-2.21C17.04 12.03 18 10.13 18 8c0-3.31-2.69-6-6-6zm2 17.5h-4c-.28 0-.5.22-.5.5s.22.5.5.5h4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-4.14-2.52l.27-1.34h3.74l.27 1.34c.1.49-.24.97-.73.97H8.59c-.49 0-.83-.48-.73-.97z"/>
              </svg>
              {/* 2. NEW: Mentor Popup Span */}
              <span className="mentor-popup">Mentor</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorMarquee;