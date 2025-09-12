import React from "react";
import Button from "./Button";
import DarkButton from "./DarkButton";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-hero">
          <h2 className="footer-title" data-reveal>
            Ready to Join the <span style={{fontWeight: 500}}>Pedal</span><span className="highlight-accent">Invest</span> Visionary Network?
          </h2>
        </div>

        <div className="footer-item">
          <Button />
          <DarkButton />
        </div>


      </div>
    </section>
  );
};

export default Footer;
