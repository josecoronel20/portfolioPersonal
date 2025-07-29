"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const CallToAction = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();
  return (
    <section className="mt-12 text-center">
      <Card className="bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 border-cyan-700/30 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            {textLanguage.blogPage.callToAction.title}
          </h3>
          <p className="text-cyan-200/80 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            {textLanguage.blogPage.callToAction.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={textLanguage.contactInfo.linkedin} target="_blank">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 font-medium transition-all duration-300">
                <User className="w-4 h-4 mr-2" />
                {textLanguage.blogPage.callToAction.cta}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CallToAction;
