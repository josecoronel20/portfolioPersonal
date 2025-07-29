"use client";
import { User } from "lucide-react";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const AboutMeSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4 h-full ">
      <div className="container flex flex-col mx-auto justify-center items-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <User className="w-10 h-10 inline mr-4" />
          {textLanguage.homePage.aboutMeSection.title}
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center">
            {textLanguage.homePage.aboutMeSection.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
