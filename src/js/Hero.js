import React from "react";
import { useState } from "react";
import "../styles/Hero.css";

const screenWidth = window.innerWidth;

const Hero = () => {
  const [isNoGame, setIsNoGame] = useState(true);
  const ExploreBtn = () => {
    return (
      <div className="explore-btn">
        <a href="#about-me">EXPLORE</a>
      </div>
    );
  };
  const check = () => {
    if (screenWidth > 1000) {
      setGame(<GameContianer />);
      setIsNoGame(false);
    } else {
      shake();
    }
  };
  const shake = () => {
    console.log("shaking");
  };
  const GameContianer = () => {
    return (
      <div className="game-container">
        <h1>this is the game container</h1>
      </div>
    );
  };
  const SpaceShip = () => {
    return (
      <div className="spaceShip-container center">
        <div
          className="space-ship"
          onClick={() => {
            check();
          }}
        >
          <h1>this is the spaceship</h1>
        </div>
      </div>
    );
  };
  const [game, setGame] = useState(<SpaceShip />);
  return (
    <section className="hero center">
      {game}
      {isNoGame && <ExploreBtn />}
    </section>
  );
};

export default Hero;
