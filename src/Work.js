import React from "react";

const Work = () => {
  return (
    <section className="my-work">
      <div className="buttons-container">
        <button className="category-button"></button>
        <button className="category-button"></button>
        <button className="category-button"></button>
      </div>
      <MyWorks />
    </section>
  );
};

const workList = [
  {
    img: "https://getuikit.com/v2/docs/images/placeholder_300x455.svg",
    title: "2",
    desc: "3",
    category: "4",
  },
  {
    img: "https://getuikit.com/v2/docs/images/placeholder_300x455.svg",
    title: "2",
    desc: "3",
    category: "4",
  },
  {
    img: "https://getuikit.com/v2/docs/images/placeholder_300x455.svg",
    title: "2",
    desc: "3",
    category: "4",
  },
];

export const MyWorks = () => {
  return (
    <div className="cards-grid">
      {workList.map((work) => {
        const { img, title, desc, category } = work;
        return (
          <div className="work-card">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
