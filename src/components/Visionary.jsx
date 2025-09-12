import React from "react";
import ChatLogo from "../assets/chat.svg";
import MenLogo from "../assets/men.svg";
import CheckLogo from "../assets/check.svg";

const Visionary = () => {
  return (
    <section className="visionary">
      <div className="container">
        <div className="visionary-hero">
          <h2 className="visionary-title" data-reveal>
            What We Expect From <span className="highlight-accent">"Our Visionaries"</span>
          </h2>
        </div>

        <div className="visionary-item">
          {/* Left Column: Chat Logo */}
          <div className="chat-logo-container">
            <img src={ChatLogo} alt="Chat Logo" />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-content">
            <h2 className="heading" data-reveal>
              Active Engagement
            </h2>
            <p className="description">
              We request 4-5 hours of your time each month for pitches, investments, engagements, and networking events.
            </p>
          </div>
        </div>

        <div className="visionary-item">
          {/* Left Column: Chat Logo */}
          <div className="chat-logo-container">
            <img src={CheckLogo} alt="Chat Logo" />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-content">
            <h2 className="heading" data-reveal>
              Valuable Feedback
            </h2>
            <p className="description">
              Your insights on industry theses and deals are invaluable to us and the startups we support.
            </p>
          </div>
        </div>

        <div className="visionary-item">
          {/* Left Column: Chat Logo */}
          <div className="chat-logo-container">
            <img src={MenLogo} alt="Chat Logo" />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-content">
            <h2 className="heading" data-reveal>
              Networking and Mentorship
            </h2>
            <p className="description">
              Relevant connections, references, and advice for our portfolio startups are highly appreciated.
            </p>
          </div>
        </div>

        <div className="visionary-item-image">
          <div className="bento-grid">
            {/* The first item will be our larger "hero" image */}
            <div className="bento-item">
              <img src="https://framerusercontent.com/images/7Lx5x7GyLlaEOKe0beEpbMkytLk.jpg?scale-down-to=1024" alt="Bento Image 1" />
            </div>
            {/* The other two items will be smaller */}
            <div className="bento-item">
              <img src="https://framerusercontent.com/images/7YoM643eU3ordpB8tnFIXLnowc.jpg?scale-down-to=512" alt="Bento Image 2" />
            </div>
            <div className="bento-item">
              <img src="https://framerusercontent.com/images/GXOJLHMMCIkVUscWnPQMDw8FqQ.jpg?scale-down-to=1024" alt="Bento Image 3" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Visionary;
