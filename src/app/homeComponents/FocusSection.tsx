import { Badge } from "@/components/ui/badge";
import React from "react";

const FocusSection = (): JSX.Element => {
  return (
    <section className="py-24 px-4 ">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-300">
          Enfoque Actual
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed mb-12 font-light">
          Actualmente me encuentro profundizando en arquitecturas de
          microservicios y patrones avanzados de React. Mi objetivo es
          integrarme en un equipo donde pueda aportar mi experiencia en frontend
          mientras continúo creciendo en el desarrollo backend y arquitectura de
          sistemas escalables.
        </p>
        <div className="flex justify-center">
          <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-6 py-3 text-lg font-medium">
            🚀 Disponible para nuevas oportunidades
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
