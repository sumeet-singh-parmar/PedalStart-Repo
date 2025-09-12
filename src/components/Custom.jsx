import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const Custom = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Custom cursor
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    const hoverElements = document.querySelectorAll("a, button");
    const header = document.querySelector("#header");

    if (cursorDot && cursorOutline) {
      function getCenterOffset(el) {
        const rect = el.getBoundingClientRect();
        return { x: rect.width / 2, y: rect.height / 2 };
      }

      window.addEventListener("mousemove", (e) => {
        const dotOffset = getCenterOffset(cursorDot);
        const outlineOffset = getCenterOffset(cursorOutline);
        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";
        gsap.to(cursorDot, { x: e.clientX - dotOffset.x, y: e.clientY - dotOffset.y, duration: 0 });
        gsap.to(cursorOutline, { x: e.clientX - outlineOffset.x, y: e.clientY - outlineOffset.y, duration: 0 });
      });

      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursorOutline.classList.add("hover");
          header.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
          cursorOutline.classList.remove("hover");
          header.classList.remove("hover");
        });
      });
    }

    // Scroll indicator
    const onScroll = () => {
      if (window.scrollY > 80) document.body.classList.add("scrolled");
      else document.body.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div id="grain"></div> {/* KEEP THIS */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-arrow">&#8595;</span>
      </div>

      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default Custom;
