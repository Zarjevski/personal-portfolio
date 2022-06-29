import React from "react";
import "./Hero.css";
import AboutMe from "./AboutMe.js";

const Hero = () => {
  return (
    <section className="hero">
      <img src="" alt="" />
      <h1 className="hero-title">Lets begin our journey</h1>
      <div className="dive-button">
        <a href={<AboutMe />}>
          <span></span>dive
        </a>
      </div>
    </section>
  );
};

export default Hero;
