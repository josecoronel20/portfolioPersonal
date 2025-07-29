"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const ContactSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-300">
          {textLanguage.homePage.contactSection.title}
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100/90 mb-16 font-light">
          {textLanguage.homePage.contactSection.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href={textLanguage.contactInfo.linkedin}
            target="_blank"
            className="w-full"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group w-full"
            >
              <Linkedin className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </Button>
          </Link>
          <Link
            href={textLanguage.contactInfo.github}
            target="_blank"
            className="w-full"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group w-full"
            >
              <Github className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </Button>
          </Link>
          <Link
            href={textLanguage.contactInfo.email}
            target="_blank"
            className="w-full"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group w-full"
            >
              <Mail className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
