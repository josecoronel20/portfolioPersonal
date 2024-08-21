import React from "react";
import useLanguage from "../customHooks/useLanguage";
import illustration from "../../../public/img/illustration.png";
import { Link } from "react-router-dom";

const Hero = () => {
  //custom hook de lengiuaje para importar el json con textos en es o en
  const { lenguage } = useLanguage();

  return (
    <section className="bg-darkDark px-10 pt-20 min-h-screen">
      <div className="flex flex-col justify-center h-full items-center text-center pt-5">
        <div className="order-2 md:order-1">
          <div>
            <h1 className="h1">{lenguage.home.hero.title}</h1>
            <h3>{lenguage.home.hero.subtitle}</h3>
          </div>
          <button><Link to="/projects">{lenguage.home.hero.button}</Link></button>
        </div>
        <div className="order-1 md:order-2 w-5/6 custom-shadow">
          <img src={illustration} alt={lenguage.home.hero.altImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
