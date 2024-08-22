import React from "react";
import useLanguage from "../customHooks/useLanguage";
import illustration from "../../../public/img/illustration.png";
import { Link } from "react-router-dom";
import { styleButtonPrincipal, styleCustomContainerTop } from "../../utilities/styles";

const Hero = () => {
  //custom hook de lengiuaje para importar el json con textos en es o en
  const { lenguage } = useLanguage();

  return (
    <section className={styleCustomContainerTop}>
      <div className="flex flex-col justify-center w-full h-full items-center text-center pt-5">
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <h1 className="text-3xl">{lenguage.home.hero.title}</h1>
          <h3 className="text-2xl font-light">{lenguage.home.hero.subtitle}</h3>
          <button className={styleButtonPrincipal}>
            <Link to="/projects">{lenguage.home.hero.button}</Link>
          </button>
        </div>
        <div className="order-1 md:order-2 w-5/6 custom-shadow">
          <img src={illustration} alt={lenguage.home.hero.altImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
