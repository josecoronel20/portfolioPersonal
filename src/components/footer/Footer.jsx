import React from "react";
import useLanguage from "../Hooks/useLanguage";
import {
  iconGithub,
  iconLinkedin,
  iconMail,
  iconWpp,
} from "../../utilities/Icons";
import FooterLink from "./FooterLink";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-darkFooter px-2 py-10 flex flex-col items-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3>{language.footer.contactMe.title}</h3>
          <FooterLink
            icon={iconMail}
            text={language.footer.contactMe.mail}
            url={"mailto:josecoronel20@outlook.com"}
          />
          <FooterLink
            icon={iconWpp}
            text={language.footer.contactMe.number}
            url={"https://wa.me/351912981851"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3>{language.footer.followMe.title}</h3>
          <FooterLink
            icon={iconGithub}
            text={language.footer.followMe.github}
            url={"https://github.com/josecoronel20"}
          />

          <FooterLink
            icon={iconLinkedin}
            text={language.footer.followMe.linkedin}
            url={"https://www.linkedin.com/in/jose-maria-coronel/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
