import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: `${scrollPercent}%`,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header">
      <div className="container">
        <a href="#" className="logo">
          <span>Pedal</span>
          <span className="logo-invest" style={{ marginLeft: "8px" }}>
            Invest
          </span>
        </a>

        <nav>
          <a href="#" className="nav-button">
            <div className="icon-container">
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.125 9.375L7.5 6L4.125 2.625"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Join PedalInvest</span>
          </a>
        </nav>
      </div>

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px", // thinner
          width: "100%",
          backgroundColor: "rgba(224,224,224,0.5)", // lighter background
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            width: "0%",
            backgroundColor: "#37A75F",
            boxShadow: "0 0 8px #37A75F, 0 0 4px #37A75F", // glow effect
            borderRadius: "2px", // small rounding for nicer glow
          }}
        ></div>
      </div>
    </header>
  );
};

export default NavBar;
