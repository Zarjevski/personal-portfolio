import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyWorks from "./MyWorks";
import Hero from "./Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hero />
    <MyWorks />
  </React.StrictMode>
);
