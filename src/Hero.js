import React from "react";
import "./Hero.css";
import AboutMe from "./AboutMe.js";

const Hero = () => {
  return (
    <section className="hero">
      <img src="" alt="" />
      <h1 className="hero-title">Lets begin our journey</h1>
      <div className="dive-button">
        <a href=".about-me">
          <span></span>EXPLORE
        </a>
      </div>
    </section>
  );
};

export default Hero;
