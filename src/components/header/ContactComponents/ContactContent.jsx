import React from "react";
import FooterLink from "../../footer/FooterLink";
import useLanguage from "../../Hooks/useLanguage";
import {
  iconGithub,
  iconLinkedin,
  iconMail,
  iconWpp,
} from "../../../utilities/Icons";

const ContactContent = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3>{language.footer.contactMe.sectionTitle}</h3>
        <FooterLink
          icon={iconMail}
          text={language.footer.contactMe.email.title}
          textForCopy={language.footer.contactMe.email.value}
          url={"mailto:josecoronel20@outlook.com"}
        />
        <FooterLink
          icon={iconWpp}
          text={language.footer.contactMe.phone.title}
          textForCopy={language.footer.contactMe.phone.value}
          url={"https://wa.me/351912981851"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3>{language.footer.followMe.sectionTitle}</h3>
        <FooterLink
          icon={iconGithub}
          text={language.footer.followMe.github.title}
          textForCopy={language.footer.followMe.github.value}
          url={"https://github.com/josecoronel20"}
        />

        <FooterLink
          icon={iconLinkedin}
          text={language.footer.followMe.linkedin.title}
          textForCopy={language.footer.followMe.linkedin.value}
          url={"https://www.linkedin.com/in/jose-maria-coronel/"}
        />
      </div>
    </div>
  );
};

export default ContactContent;
