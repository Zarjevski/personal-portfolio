import React from "react";
// import Work from "./js/Work";
import Hero from "./js/Hero";
import AboutMe from "./js/AboutMe";
import SideBar, { NavButton } from "./js/SideBar";

const App = () => {
  return (
    <>
      <main>
        <NavButton />
        <Hero />
        <AboutMe />
        {/* <Work /> */}
      </main>
    </>
  );
};

export default App;
