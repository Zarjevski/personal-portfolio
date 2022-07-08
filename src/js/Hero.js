import React, { useState } from "react";
import "../styles/Hero.css";
const pcScreen = true;

const Hero = () => {
  const Tear = () => {
    return (
      <div className="tear center">
        <div className="space-ship" onClick={check}>
          <h6>this is the space ship</h6>
        </div>
      </div>
    );
  };
  const GameDisplay = () => {
    return (
      <div className="game-grid">
        <h1>this is the game grid</h1>
      </div>
    );
  };
  const [space, SetGame] = useState(<Tear />);
  const check = () => {
    if (pcScreen) {
      SetGame(<GameDisplay />);
    } else {
      console.log("you need a pc for this");
    }
  };
  return (
    <section className="hero center">
      {space}
      <div className="explore-btn">
        <a href="#about-me">explore</a>
      </div>
    </section>
  );
};

export default Hero;
