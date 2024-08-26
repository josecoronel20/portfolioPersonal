import React from "react";
import Hero from "../components/home/Hero";
import Carrousel from "../components/home/Carrousel";
import AboutMe from "../components/home/AboutMe";
import Techs from "../components/home/techsComponent/Techs";

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
