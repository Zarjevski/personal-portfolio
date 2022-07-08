import React from "react";
import "../styles/SideBar.css";

const SideBar = () => {
  return <aside className="sidebar active"></aside>;
};

export const NavButton = () => {
  return (
    <div className="nav-button">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};

export default SideBar;
