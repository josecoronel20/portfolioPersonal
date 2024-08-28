import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import illustration from "../../../public/img/illustration.png";
import { Link } from "react-router-dom";
import { styleButtonPrincipal, styleContainerTop } from "../../Utilities/customStyles";

const Hero = () => {
  //custom hook de lengiuaje para importar el json con textos en es o en
  const { language } = useLanguage();

  return (
    <section className={styleContainerTop}>
      <div className="flex flex-col md:flex-row md:gap-5 justify-center w-full h-full items-center text-center pt-5">
        <div className="order-2 md:order-1 flex flex-col gap-4 max-w-xs">
          <h1 className="text-3xl">{language.home.hero.title}</h1>
          <h3 className="text-2xl font-light">{language.home.hero.subtitle}</h3>
          <button className={styleButtonPrincipal}>
            <Link to="/projects">{language.home.hero.button}</Link>
          </button>
        </div>
        <div className="order-1 md:order-2 w-5/6 custom-shadow max-w-xs md:max-w-md">
          <img src={illustration} alt={language.home.hero.altImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
