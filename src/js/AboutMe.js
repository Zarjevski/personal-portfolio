import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1>about me</h1>
      <div className="image-container center">
        <div className="image-card">
          <img src="" alt="" />
        </div>
      </div>
      <div className="story-container center">
        <div className="my-story">
          <h1>Victor Zarjevski</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            consequuntur id placeat excepturi aliquid ut et voluptatem in. Rem
            minus distinctio at necessitatibus dolores consequuntur cum quos
            rerum porro qui odit sunt unde, culpa repellat facere magni illo
            impedit, eaque quisquam voluptatum dolor earum veniam? Quo esse
            dolor sequi! Consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
