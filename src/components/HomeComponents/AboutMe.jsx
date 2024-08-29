import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import { styleContainer } from "../../Utilities/customStyles";

const AboutMe = () => {
  const { globalText } = useLanguage({typeText:"globalText"});

  return (
    <section className={`${styleContainer} flex flex-col gap-10`}>
      <h2 className="text-center">{globalText.home.aboutMe.title}</h2>
      <div className="flex flex-col gap-5 font-light">
        <div>
          <p>{globalText.home.aboutMe.text.paragraph1.text}</p>
        </div>
        <div>
          <h3 className="text-green">{globalText.home.aboutMe.text.paragraph2.title}</h3>
          <p>{globalText.home.aboutMe.text.paragraph2.text}</p>
        </div>
        <div>
          <h3 className="text-green">{globalText.home.aboutMe.text.paragraph3.title}</h3>
          <p>{globalText.home.aboutMe.text.paragraph3.text}</p>
        </div>
        <div>
          <h3 className="text-green">{globalText.home.aboutMe.text.paragraph4.title}</h3>
          <p>{globalText.home.aboutMe.text.paragraph4.text}</p>
        </div>
        <div>
          <h3 className="text-green">{globalText.home.aboutMe.text.paragraph5.title}</h3>
          <p>{globalText.home.aboutMe.text.paragraph5.text}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
