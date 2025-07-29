"use client";
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from "@/store/useLanguageStore";
import Link from "next/link";
import React from "react";

const FocusSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4 ">
      <div className="container mx-auto max-w-4xl text-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300">
          {textLanguage.homePage.focusSection.title}
        </h2>

        <div className="flex flex-col gap-10 h-full justify-center items-center">
          <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed font-light">
            {textLanguage.homePage.focusSection.text}
          </p>
          <div className="flex justify-center items-center">
            <Link href={textLanguage.contactInfo.email} target="_blank" className="cursor-pointer">
              <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-6 py-3 text-lg font-medium">
                🚀 {textLanguage.homePage.focusSection.cta}
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
