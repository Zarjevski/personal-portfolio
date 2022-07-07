import React, { useState } from "react";
import "../styles/Hero.css";
const pcScreen = false;

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
  const [space, SetGame] = useState(<Tear />);
  const check = () => {
    if (pcScreen) {
      SetGame(console.log("you are on a pc"));
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
