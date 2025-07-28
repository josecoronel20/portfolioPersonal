import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, ExternalLink } from "lucide-react";
import React from "react";

const CallToAction = (): JSX.Element => {
  return (
    <section className="mt-12 text-center">
      <Card className="bg-gradient-to-r from-cyan-900/10 to-cyan-900/5 border-cyan-700/30 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            ¿Te gustó el contenido?
          </h3>
          <p className="text-cyan-200/80 text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Sígueme en mis redes sociales para más contenido sobre desarrollo
            web y las últimas tecnologías
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 font-medium transition-all duration-300">
              <User className="w-4 h-4 mr-2" />
              Seguir en LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 py-3 font-medium bg-transparent transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver más proyectos
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CallToAction;
