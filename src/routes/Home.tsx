import React from "react";
import Hero from "../components/HomeComponents/Hero";
import Carrousel from "../components/HomeComponents/Carousel";
import AboutMe from "../components/HomeComponents/AboutMe";
import Techs from "../components/HomeComponents/Techs";

const Home = ():JSX.Element => {
  return (
    <>
      <Hero />
      <div className="bg-darkDark flex flex-col md:flex-row md:items-start justify-center">
        <Carrousel />
        <AboutMe />
      </div>
      <Techs />
    </>
  );
};

export default Home;
