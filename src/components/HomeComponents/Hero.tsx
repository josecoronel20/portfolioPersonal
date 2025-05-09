import React from "react";
import { Link } from "react-router-dom";
import {
  styleButtonPrincipal,
  styleContainerTop,
} from "../../utilities/customStyles";
import { useLanguageStore } from "../../store/useLanguageStore";
import heroImage from "../../img/illustration.png"

const Hero = ():JSX.Element => {

//importa el idioma del store
const {textLanguage} = useLanguageStore()

  return (
    <section className={styleContainerTop}>
      <div className="flex flex-col md:flex-row md:gap-5 justify-center w-full h-full items-center text-center pt-5">
        <div className="order-2 md:order-1 flex flex-col gap-4 max-w-xs">
          <h1 className="text-3xl">
            {textLanguage.home.hero.title.beforeHiglight}
            <span className="text-green">{textLanguage.home.hero.title.higlight}</span>
          </h1>
          <h3 className="text-2xl font-light">
            {textLanguage.home.hero.subtitle.beforeHiglight}
            <span className="text-green">{textLanguage.home.hero.subtitle.higlight}</span>
          </h3>

          <Link className={styleButtonPrincipal} to="/projects">
            {textLanguage.home.hero.cta}
          </Link>
          
        </div>
        <div className="order-1 md:order-2 w-5/6 custom-shadow max-w-xs md:max-w-md">
          <img src={heroImage} alt={textLanguage.home.hero.heroImg.imgAlt} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
