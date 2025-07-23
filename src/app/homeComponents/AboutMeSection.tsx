import { User } from "lucide-react";
import React from "react";

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <User className="w-10 h-10 inline mr-4" />
          Sobre mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-cyan-100/90 text-lg leading-relaxed">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              Soy un desarrollador autodidacta apasionado por crear experiencias
              web excepcionales. Mi enfoque se centra en escribir código limpio
              y mantener arquitecturas desacopladas que faciliten el
              mantenimiento y escalabilidad de las aplicaciones.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              A través de proyectos reales, he desarrollado expertise en el
              ecosistema React y tecnologías backend modernas. Busco
              constantemente aplicar las mejores prácticas de desarrollo y
              mantenerme actualizado con las últimas tendencias de la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
