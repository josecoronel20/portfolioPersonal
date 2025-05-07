import React from "react";
import { styleContainer } from "../../Utilities/customStyles";
import { useLanguage } from "../../context/LanguageContext";

const AboutMe = () => {
  //variable con texto dependiendo del lenguaje
  const { textLanguage } = useLanguage();
  //componetizacion de parrafos
  const Paragraph = ({ title, text }: { title: string; text: string }) => {
    return (
      <div>
        {title && <h3 className="text-green">{title}</h3>}
        <p className="font-light">{text}</p>
      </div>
    );
  };

  return (
    <section
      className={`${styleContainer} flex flex-col justify-between gap-10 md:w-1/2`}
    >
      <h2 className="text-center">{textLanguage.home.aboutMe.title}</h2>
      <h3 className="font-light">{textLanguage.home.aboutMe.subtitle}</h3>

      {textLanguage.home.aboutMe.sections.map((section, index) => {
        return (
          <Paragraph key={index} title={section.title} text={section.text} />
        );
      })}
    </section>
  );
};

export default AboutMe;
