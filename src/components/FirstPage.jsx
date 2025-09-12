import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const FirstPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((target) => {
      const text = new SplitType(target, { types: "lines" });
      gsap.from(text.lines, {
        scrollTrigger: {
          trigger: target,
          start: "top 85%",
          end: "bottom 60%",
          once: true,
        },
        yPercent: 100,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
        onComplete: () => {
          // only now show the shine text
          const shine = target.parentElement.querySelector(".shine-text");
          const base = target.parentElement.querySelector(".base-text");
          if (base) {
            gsap.set(base, { opacity: 1 });
          }
          if (shine) {
            gsap.set(shine, { opacity: 1 });
          }
        },
      });
    });


    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="hero framer-section">
      <div className="container">
        <div className="hero-content">
          <div className="title-wrapper">
            <p className="main-title" data-reveal>
              <span className="word">Where The Visionaries Back</span>
            </p>
            <div className="accent-title">
              {/* Base solid green text */}
              <p
                className="base-text"
                style={{
                  fontFamily: "'Architects Daughter', sans-serif",
                  fontSize: "56px",
                }}
                data-reveal
              >
                Tomorrow's Disruptors
              </p>

              {/* Shine overlay text */}
              <p
                className="shine-text"
                style={{
                  fontFamily: "'Architects Daughter', sans-serif",
                  fontSize: "56px",
                }}
              >
                Tomorrow's Disruptors
              </p>
            </div>
          </div>
          <div className="subtitle-group">
            <div className="brand-name">
              <span className="dash">-</span>
              <span className="pedal">Pedal</span>
              <span className="invest">Invest</span>
            </div>
            <p className="subtitle">Powering Angels, Fueling Startups.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
