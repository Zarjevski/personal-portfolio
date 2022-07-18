import React from "react";
import Hero from "./js/Hero";
import AboutMe from "./js/AboutMe";
// import SideBar, { NavButton } from "./js/SideBar";
import Navbar from "./js/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <NavButton /> */}
        <Hero />
        <AboutMe />
      </main>
    </>
  );
};

export default App;
