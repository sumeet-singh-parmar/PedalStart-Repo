import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loader.css";

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setReady(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Exit animation
  useEffect(() => {
    if (ready && loaderRef.current) {
      gsap.to(loaderRef.current, {
        duration: 1,
        opacity: 0,
        scale: 1.2,
        ease: "power2.inOut",
        onComplete: onLoaded,
      });
    }
  }, [ready, onLoaded]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="center full-height-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269 134.11" id="svg">
          <g id="animationWheels" transform="rotate(0 101.5 92.61)">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1s"
              type="rotate"
              from="0 101.5 92.61"
              to="360 101.5 92.61"
              repeatCount="indefinite"
            />
            <path id="animateThis" className="cls-3" d="M79.21 113.77a34 34 0 1 1 46.56 12 34 34 0 0 1-46.56-12z" transform="translate(-7 -3.89)" />
          </g>
          <g id="parrot" transform="rotate(0 227.5 92.61)">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1s"
              type="rotate"
              from="0 227.5 92.61"
              to="360 227.5 92.61"
              repeatCount="indefinite"
            />
            <path id="animateThis2" className="cls-3" d="M268.5 96.5a34 34 0 1 1-34-34 34 34 0 0 1 34 34z" transform="translate(-7 -3.89)" />
          </g>

          {/* Wheels */}
          <g id="wheels">
            <circle id="outerwheel" className="cls-2" cx="101.5" cy="92.61" r="40"/>
            <circle id="outerwheel-2" data-name="outerwheel" className="cls-2" cx="227.5" cy="92.61" r="40"/>
            <circle id="centerwheel" className="cls-2" cx="227.5" cy="92.61" r="3"/>
            <circle id="centerwheel-2" data-name="centerwheel" className="cls-2" cx="101.5" cy="92.61" r="3"/>
          </g>

          {/* Body */}
          <g id="body">
            <path id="cBody" className="cls-4" d="M156.5 92.61l-32-69-.19-.42"/>
            <path id="cBody-2" className="cls-4" d="M156.5 92.61l53-57"/>
            <path id="cBody-3" className="cls-4" d="M117 7.11l7.31 16.08"/>
            <path id="cBody-4" className="cls-4" d="M124.5 22.61h84"/>
          </g>

          {/* Effects */}
          <g id="effects">
            <path id="effects10" stroke="#bff1ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M104.5 32.61h-63"/>
            <path id="effects9" className="cls-10" d="M104 42.11H75"/>
            <path id="effects8" className="cls-10" d="M68 127.11H22"/>
            <path id="effects7" className="cls-10" d="M61 118.11H38"/>
            <path id="effects6" className="cls-10" d="M54 108.11H25"/>
            <path id="effects5" className="cls-10" d="M104 23.11H80"/>
            <path id="effects4" className="cls-10" d="M80 51.11H66"/>
            <path id="effects3" className="cls-10" d="M49 97.11H2"/>
            <path id="effects2" className="cls-10" d="M195 127.11h-23"/>
            <path id="effects1" className="cls-10" d="M184 120.11h-33"/>
          </g>
        </svg>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loader;
