import React from "react";
import Hero from "./Components/Hero";
import Carrousel from "./Components/Carrousel";
import AboutMe from "./Components/AboutMe";
import Techs from "./Components/Techs";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-darkDark flex flex-col md:flex-row md:items-start">
        <Carrousel />
        <AboutMe />
      </div>
      <Techs />
    </>
  );
};

export default Home;
