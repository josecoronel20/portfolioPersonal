import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const FocusSection = (): JSX.Element => {
  return (
    <section className="py-24 px-4 ">
      <div className="container mx-auto max-w-4xl text-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300">
          Enfoque Actual
        </h2>

        <div className="flex flex-col gap-10 h-full justify-center items-center">
          <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed font-light">
            Actualmente me encuentro profundizando en arquitecturas de
            microservicios y patrones avanzados de React. Mi objetivo es
            integrarme en un equipo donde pueda aportar mi experiencia en
            frontend mientras continúo creciendo en el desarrollo backend y
            arquitectura de sistemas escalables.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/ContactMe"
              className="cursor-pointer"
            >
              <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-6 py-3 text-lg font-medium">
                🚀 Disponible para nuevas oportunidades
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
