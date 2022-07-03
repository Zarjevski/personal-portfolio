import React from "react";
import "../styles/Hero.css";
const spaceShip = document.querySelector(".space-ship");

spaceShip.addEventListener("click", startOrShake);
const startOrShake = () => {};

const Hero = () => {
  return (
    <section className="hero center">
      <div className="tear center">
        <div className="space-ship">
          <h6>this is the space ship</h6>
        </div>
      </div>
      <div className="explore-btn">
        <a href="#about-me">explore</a>
      </div>
    </section>
  );
};

export default Hero;
