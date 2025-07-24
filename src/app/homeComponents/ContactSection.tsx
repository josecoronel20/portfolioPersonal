import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const ContactSection = (): JSX.Element => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-300">
          Contacto Directo
        </h2>
        <p className="text-xl md:text-2xl text-cyan-100/90 mb-16 font-light">
          ¿Tienes una oportunidad interesante? ¡Hablemos!
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group"
          >
            <Linkedin className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium">LinkedIn</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group"
          >
            <Github className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium">GitHub</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group"
          >
            <Phone className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium">WhatsApp</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 p-8 h-auto flex-col bg-transparent transition-all duration-300 group"
          >
            <Mail className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Email</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
