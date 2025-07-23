"use client";

import React from "react";
import { styleContainerTop } from "@/styles/customStyles";
import { useLanguageStore } from "@/store/useLanguageStore";

//Componente Contact que renderiza la sección de contacto.
const Contact = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <main className={styleContainerTop}>
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-lightLight text-center">
          {textLanguage.footer.contactMe.sectionTitle}
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-green font-semibold">
              {textLanguage.footer.contactMe.email.title}
            </h3>
            <a
              href={`mailto:${textLanguage.footer.contactMe.email.value}`}
              className="text-lightLight hover:text-green transition-colors"
            >
              {textLanguage.footer.contactMe.email.value}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-green font-semibold">
              {textLanguage.footer.contactMe.phone.title}
            </h3>
            <a
              href={`tel:${textLanguage.footer.contactMe.phone.value}`}
              className="text-lightLight hover:text-green transition-colors"
            >
              {textLanguage.footer.contactMe.phone.value}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
