"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Code2,
  Download,
  Github,
  Linkedin,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import illustration from "../../../public/img/illustration.png";
import { useLanguageStore } from "@/store/useLanguageStore";

const HeroSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16 bg-color-to-b">
      <div className="container mx-auto text-center z-10 max-w-5xl">
        <div>
          <section className="grid grid-cols-1 items-center min-h-screen md:grid-cols-2 pb-12">
            <div className="w-full max-w-xs md:max-w-lg mx-auto md:order-2 animate-fade-left animate-ease-out">
              <Image
                src={illustration}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:order-1 flex flex-col gap-4 animate-fade-right animate-ease-out">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent leading-tight ">
                  {textLanguage.homePage.heroSection.title}
                </h1>

                <h2 className="text-2xl md:text-2xl text-cyan-100 font-light">
                  {textLanguage.homePage.heroSection.subtitle}
                </h2>
              </div>

              <section className="flex flex-col items-center justify-center gap-4">
                <p className="text-lg md:text-xl text-cyan-200/80 font-medium">
                  {textLanguage.homePage.heroSection.techs.join(" • ")}
                </p>

                <div className="flex items-center justify-center gap-3 text-cyan-300/70 text-sm md:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{textLanguage.homePage.heroSection.location}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{textLanguage.homePage.heroSection.age}</span>
                </div>

                <div>
                  <p className="text-xl md:text-2xl text-cyan-100/90 max-w-4xl mx-auto leading-relaxed font-light">
                    "{textLanguage.homePage.heroSection.objective}"
                  </p>
                </div>

                <div className="grid grid-cols-1  gap-2 justify-center items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <Link href="/Projects">
                      <Button size="lg" className="button-principal text-xl">
                        <Code2 className="w-5 h-5" />
                        {textLanguage.homePage.heroSection.ctaProjects}
                      </Button>
                    </Link>

                    <Link
                      href={textLanguage.contactInfo.cv}
                      download
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="button-secondary text-xl"
                      >
                        <Download className="w-5 h-5" />
                        {textLanguage.homePage.heroSection.ctaCv}
                      </Button>
                    </Link>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Link
                      href={textLanguage.contactInfo.github}
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        variant="ghost"
                        className="text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-400/10 p-3"
                      >
                        <Github className="w-6 h-6" />
                      </Button>
                    </Link>

                    <Link
                      href={textLanguage.contactInfo.linkedin}
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        variant="ghost"
                        className="text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-400/10 p-3"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-cyan-400/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
