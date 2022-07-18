import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://">home</a>
        </li>
        <li>
          <a href="http://">about</a>
        </li>
        <li>
          <a href="http://">skills</a>
        </li>
        <li>
          <a href="http://">work</a>
        </li>
        <li>
          <a href="http://">contact</a>
        </li>
      </ul>
      <div className="social">
        <a href="http://">
          <i></i>
        </a>
        <a href="http://">
          <i></i>
        </a>
        <a href="http://">
          <i></i>
        </a>
        <a href="http://">
          <i></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
