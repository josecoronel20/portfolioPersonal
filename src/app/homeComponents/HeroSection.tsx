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

const HeroSection = (): JSX.Element => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 to-blue-500/3"></div>
      <div className="container mx-auto text-center z-10 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <section className="grid grid-cols-1 items-center min-h-screen pt-16 md:grid-cols-2">
            <div className="w-full max-w-xs md:max-w-lg mx-auto md:order-2">
              <Image
                src={illustration}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:order-1">
              <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent leading-tight">
                José María Coronel
              </h1>

              <h2 className="text-2xl md:text-2xl text-cyan-100 mb-8 font-light">
                Fullstack Developer enfocado en Frontend
              </h2>
            </div>
          </section>
        </div>

        <section className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-lg md:text-xl text-cyan-200/80 mb-4 font-medium">
            React • TypeScript • Next.js
          </p>
          <div className="flex items-center justify-center gap-3 text-cyan-300/70 mb-12 text-sm md:text-base">
            <MapPin className="w-4 h-4" />
            <span>Buenos Aires, Argentina</span>
            <span>•</span>
            <Calendar className="w-4 h-4" />
            <span>24 años</span>
          </div>

          <div className="mb-16">
            <p className="text-xl md:text-2xl text-cyan-100/90 max-w-4xl mx-auto leading-relaxed font-light">
              "Buscando integrarme en un equipo donde aportar desde el frontend
              y crecer en arquitectura backend"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Code2 className="w-5 h-5 mr-2" />
                Ver Proyectos
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 text-lg font-medium bg-transparent transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="ghost"
                className="text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-400/10 p-3"
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-400/10 p-3"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-cyan-400/60" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
