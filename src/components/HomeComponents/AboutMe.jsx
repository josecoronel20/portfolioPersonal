import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import { styleContainer } from "../../Utilities/customStyles";

const AboutMe = () => {
  //variable con texto dependiendo del lenguaje
  const { globalText } = useLanguage({ typeText: "globalText" });

  //componetizacion de parrafos
  const Paragraph = ({ title, text }) => {
    return (
      <div>
        {title && <h3 className="text-green">{title}</h3>}
        <p className="font-light">{text}</p>
      </div>
    );
  };

  return (
    <section className={`${styleContainer} flex flex-col justify-between gap-10 md:w-1/2`}>
      <h2 className="text-center">{globalText.home.aboutMe.title}</h2>
        <Paragraph
          title={null}
          text={globalText.home.aboutMe.text.paragraph1.text}
        />
        <Paragraph
          title={globalText.home.aboutMe.text.paragraph2.title}
          text={globalText.home.aboutMe.text.paragraph2.text}
        />
        <Paragraph
          title={globalText.home.aboutMe.text.paragraph3.title}
          text={globalText.home.aboutMe.text.paragraph3.text}
        />
        <Paragraph
          title={globalText.home.aboutMe.text.paragraph4.title}
          text={globalText.home.aboutMe.text.paragraph4.text}
        />
    </section>
  );
};

export default AboutMe;
