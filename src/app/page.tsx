import React from "react";
import Hero from "./Components/Hero";
import Carrousel from "./Components/Carousel";
import AboutMe from "./Components/AboutMe";
import Techs from "./Components/Techs";

export default function Home() {
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

