import React from "react";
import "../styles/AboutMe.css";

const me = {
  firstName: "Victor",
  lastName: "Zarjevski",
  age: "23",
  country: "israel",
  phone: "0549193940",
};

// splited to two parts

const AboutMe = () => {
  const { firstName, lastName, age, country, phone } = me;
  return (
    // title start
    <section className="about-me" id="about-me">
      <div className="about-title center">
        <div className="light">
          <h1>about me</h1>
        </div>
      </div>
      {/* title end */}
      {/* my profile and story card start (front of it)*/}
      <div className="profile-card-area center">
        <div className="front">
          <div className="profile-card">
            <div className="img-container">
              <img src="" />
            </div>
            <div className="details-container"></div>
          </div>
        </div>
        {/* back of the card */}
        <div className="back"></div>
      </div>
      {/* end of card */}
    </section>
  );
};

export default AboutMe;
