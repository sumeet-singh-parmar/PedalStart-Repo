import React from "react";

const Mail = () => {
  return (
    <>
      <div className="mail">
        <div className="mail-container">
          <div className="mail-left">
            © 2025 _ PedalStart _ All rights reserved
          </div>
          <div className="mail-right">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>
            <a
              href="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Gmail"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
