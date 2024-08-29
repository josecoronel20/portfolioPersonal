import React from "react";
import FooterLink from "../../components/FooterComponents/FooterLink";
import useLanguage from "../../Hooks/useLanguage";
import {
  iconGithub,
  iconLinkedin,
  iconMail,
  iconWpp,
} from "../../Utilities/Icons";

const ContactContent = () => {
  const { globalText } = useLanguage({typeText:"globalText"});

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3>{globalText.footer.contactMe.sectionTitle}</h3>
        <FooterLink
          icon={iconMail}
          text={globalText.footer.contactMe.email.title}
          textForCopy={globalText.footer.contactMe.email.value}
          url={"mailto:josecoronel20@outlook.com"}
        />
        <FooterLink
          icon={iconWpp}
          text={globalText.footer.contactMe.phone.title}
          textForCopy={globalText.footer.contactMe.phone.value}
          url={"https://wa.me/351912981851"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3>{globalText.footer.followMe.sectionTitle}</h3>
        <FooterLink
          icon={iconGithub}
          text={globalText.footer.followMe.github.title}
          textForCopy={globalText.footer.followMe.github.value}
          url={"https://github.com/josecoronel20"}
        />

        <FooterLink
          icon={iconLinkedin}
          text={globalText.footer.followMe.linkedin.title}
          textForCopy={globalText.footer.followMe.linkedin.value}
          url={"https://www.linkedin.com/in/jose-maria-coronel/"}
        />
      </div>
    </div>
  );
};

export default ContactContent;
