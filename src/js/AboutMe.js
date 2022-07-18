import React from "react";
import "../styles/AboutMe.css";

const profilePicture = require("../imgs/profile.jpg");

// splited to two parts
const AboutMe = () => {
  return (
    <section className="about-me center" id="about-me">
      <h1>about me</h1>
      <div className="big-card">
        <div className="left-side center">
          <div className="image-container">
            <span className="top-glide"></span>
            <span className="left-glide"></span>
            <img src={profilePicture} alt="my cat"></img>
          </div>
        </div>
        <div className="right-side">
          <div className="my-story">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo dolorum, inventore temporibus vitae aliquid, animi
              maxime voluptatibus quae modi maiores facilis laudantium natus
              impedit voluptatum, incidunt optio illo? In, laudantium, ab quos
              quaerat soluta sapiente voluptas natus enim similique est ex
              nostrum voluptates eum. Nihil quae eaque necessitatibus eos
              reiciendis sunt iure totam eum fugit, labore et doloremque iusto
              ad minus facilis natus nostrum. Quo, doloremque! Tempora nam
              molestiae dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
