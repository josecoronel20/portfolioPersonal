import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Carrousel from "../components/HomeComponents/Carrousel";
import AboutMe from "../components/HomeComponents/AboutMe";
import Techs from "../components/HomeComponents/Techs";

const Home = () => {
  return (
    <>
      <Hero />
      <Carrousel />
      <AboutMe />
      <Techs />
    </>
  );
};

export default Home;
