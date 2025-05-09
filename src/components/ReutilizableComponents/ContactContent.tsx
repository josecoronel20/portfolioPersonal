import React from "react";
import FooterLink from "../Footer/FooterLink";
import { iconLinkedin, iconMail, iconWpp } from "../../utilities/Icons";
import { useLocation } from "react-router-dom";
import { useLanguageStore } from "../../store/useLanguageStore";

const ContactContent = ():JSX.Element => {
  //muestra la info de contacto

  //importa el idioma del store
  const {textLanguage} = useLanguageStore()

  //extrae el path de el url
  const currentPath = useLocation().pathname;

  return (
    <div className={`flex gap-10 ${currentPath === "/contact" ? "flex-col sm:flex-row" : "flex-col"}`}>
      <div className="flex flex-col gap-5">
        <h3>{textLanguage.footer.contactMe.sectionTitle}</h3>
        <FooterLink
          icon={iconMail}
          text={textLanguage.footer.contactMe.email.title}
          textForCopy={textLanguage.footer.contactMe.email.value}
          url={"mailto:josecoronel20@outlook.com"}
        />
        <FooterLink
          icon={iconWpp}
          text={textLanguage.footer.contactMe.phone.title}
          textForCopy={textLanguage.footer.contactMe.phone.value}
          url={"https://wa.me/351912981851"}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3>{textLanguage.footer.followMe.sectionTitle}</h3>
        <FooterLink
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#E0E2DB"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.305-.536-1.535.117-3.197 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.662.243 2.892.12 3.197.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.476 5.922.431.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          }
          text={textLanguage.footer.followMe.github.title}
          textForCopy={textLanguage.footer.followMe.github.url}
          url={textLanguage.footer.followMe.github.url}
        />

        <FooterLink
          icon={iconLinkedin}
          text={textLanguage.footer.followMe.linkedin.title}
          textForCopy={textLanguage.footer.followMe.linkedin.url}
          url={textLanguage.footer.followMe.linkedin.url}
        />
      </div>
    </div>
  );
};

export default ContactContent;
