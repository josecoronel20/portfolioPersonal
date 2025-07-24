"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import HeroSection from "./homeComponents/HeroSection";
import AboutMeSection from "./homeComponents/AboutMeSection";
import TecnicStackSection from "./homeComponents/TecnicStackSection";
import MainProjectsSection from "./homeComponents/mainProjectsSection/MainProjectsSection";

export default function Portfolio(): JSX.Element {
  const blogPosts = [
    {
      title: "Optimizando React con useMemo y useCallback",
      date: "15 Dic 2024",
      url: "#",
    },
    {
      title: "Arquitectura escalable con Zustand",
      date: "8 Dic 2024",
      url: "#",
    },
    {
      title: "Testing efectivo con React Testing Library",
      date: "1 Dic 2024",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white ">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Stack Técnico */}
      <TecnicStackSection />

      {/* Proyectos Destacados */}
      <MainProjectsSection />

      {/* Enfoque Actual */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-300">
            Enfoque Actual
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed mb-12 font-light">
            Actualmente me encuentro profundizando en arquitecturas de
            microservicios y patrones avanzados de React. Mi objetivo es
            integrarme en un equipo donde pueda aportar mi experiencia en
            frontend mientras continúo creciendo en el desarrollo backend y
            arquitectura de sistemas escalables.
          </p>
          <div className="flex justify-center">
            <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-6 py-3 text-lg font-medium">
              🚀 Disponible para nuevas oportunidades
            </Badge>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <BookOpen className="w-10 h-10 inline mr-4" />
            Contenido Técnico
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 hover:border-cyan-600/70 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-cyan-100 text-lg leading-tight group-hover:text-cyan-200 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={post.url}
                    className="text-cyan-300/80 hover:text-cyan-300 transition-colors flex items-center font-medium"
                  >
                    Leer artículo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
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
    </div>
  );
}
