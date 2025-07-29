"use client";
import { User } from "lucide-react";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const AboutMeSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <User className="w-10 h-10 inline mr-4" />
          {textLanguage.homePage.aboutMeSection.title}
        </h2>

        <div className="space-y-6">
          <p className="text-xl text-center">
            {textLanguage.homePage.aboutMeSection.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
