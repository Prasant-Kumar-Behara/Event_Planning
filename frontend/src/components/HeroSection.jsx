// import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/1.jpg" alt="restaurant" />
      <div className="item">
        <h3>Event Visionary</h3>
        <div>
          <h1>Your Own Event Planner</h1>
          <p>
            We believe that it is all about the vision, grand celebrations,spectacular moments and the little
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
