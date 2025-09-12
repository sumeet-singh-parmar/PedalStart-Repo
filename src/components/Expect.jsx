import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MentorMarquee from "./Marquee";
// Note: You don't need SplitType for this animation technique

gsap.registerPlugin(ScrollTrigger);

const Expect = () => {
  useEffect(() => {
    // Use GSAP Context for proper cleanup in React
    let ctx = gsap.context(() => {

      // --- 1. MASKED TEXT REVEAL (No Layout Change) ---
      // This targets all headings and descriptions for a consistent effect.
      const revealTargets = document.querySelectorAll("[data-reveal], .description");
      
      revealTargets.forEach((target) => {
        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
            start: "top 90%", // Start animation a bit later
            end: "bottom 60%",
            once: true,
          },
          // Animate a clip-path from a 0-height sliver to full height
          clipPath: "inset(0 0 100% 0)",
          y: 20, // A slight upward movement for finesse
          duration: 1,
          ease: "power3.out",
        });
      });

      // --- 2. STAGGERED IMAGE CARD REVEAL ---
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: ".events-grid",
          start: "top 80%",
          once: true,
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Animate each card 0.2s after the previous one
        ease: "power3.out",
      });

      // --- 3. MARQUEE CONTAINER FADE-IN ---
      gsap.from(".marquee-container", {
        scrollTrigger: {
          trigger: ".marquee-container",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 1.0,
        ease: "power3.out",
      });

    });

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section className="expect">
      <div className="container">
        <div className="expect-hero">
          <h2 className="expect-title" data-reveal>
            What You Can Expect as a <span className="highlight-accent">"PedalInvest Member"</span>
          </h2>
        </div>

        <div className="expect-item">
          <h2 className="heading" data-reveal>
            <span style={{ paddingRight: "30px" }}>1.</span> Curated Community
          </h2>
          <p className="description">
            Connect with 400+ global investors from diverse backgrounds, representing leading companies and industries.
          </p>
          {/* We'll target the Marquee's own class name */}
          <MentorMarquee />
        </div>

        <div className="expect-item">
          <h2 className="heading" data-reveal>
            <span style={{ paddingRight: "30px" }}>2.</span> Exclusive Events
          </h2>
          <p className="description">
            Free access to PedalStart’s invite-only meetups and networking events designed to foster meaningful connections.
          </p>
          <div className="events-grid">
            <div className="event-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80" alt="Event 1" />
            </div>
            <div className="event-card">
              <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946" alt="Event 2" />
            </div>
            <div className="event-card">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80" alt="Event 3" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expect;