import React from "react";
import arrowSvg from "../assets/arrow.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const AboutPage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => {
      const text = new SplitType(el, { types: "lines" });
      gsap.from(text.lines, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 60%",
          once: true,
        },
        yPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section className="about">
      <div className="container">
        {/* The large, left-aligned heading */}
        <div className="about-hero">
          <h2 className="about-title" data-reveal>
            PedalInvest unites senior leaders to empower India's startup ecosystem with{" "}
            <span className="highlight-accent">
              expertise, networks, and capital.
            </span>
          </h2>
        </div>

        {/* The card grid below the heading */}
        <div className="card-grid">
          {/* Card 1 */}
          <div className="info-card">
            <div className="card-top">
              <div className="card-icon">
                {/* Community Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="card-title">
                A handpicked community of <b><i>1000+ investors</i></b>
              </p>
            </div>

            <div className="card-arrow">
              <img src={arrowSvg} alt="Arrow Divider" />
            </div>

            <div className="card-bottom">
              <p className="card-description">
                Angel Investors, Family Offices, VC.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="info-card">
            <div className="card-top">
              <div className="card-icon">
                {/* Globe Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <p className="card-title">
                Members from <b><i>India, US, UAE, Singapore, Japan</i></b>
              </p>
            </div>

            <div className="card-arrow">
              <img src={arrowSvg} alt="Arrow Divider" />
            </div>

            <div className="card-bottom">
              <p className="card-description">
                Global reach, local impact.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="info-card">
            <div className="card-top">
              <div className="card-icon">
                {/* Shield/Check Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 12 15 17 10"></polyline>
                </svg>
              </div>
              <p className="card-title">
                <b><i>Invite-Only.</i></b> Background checks ensure quality.
              </p>
            </div>

            <div className="card-arrow">
              <img src={arrowSvg} alt="Arrow Divider" />
            </div>

            <div className="card-bottom">
              <p className="card-description">
                No random entries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
