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
  Download,
  ExternalLink,
  Code2,
  Database,
  TestTube,
  Settings,
  MapPin,
  Calendar,
  User,
  Briefcase,
  BookOpen,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio(): JSX.Element {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "React Hook Form",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "JWT",
    "Auth",
  ];
  const testingSkills = ["Jest", "React Testing Library"];
  const toolsSkills = ["Git", "GitHub", "Vite", "Docker"];

  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "Dashboard administrativo completo con autenticación JWT, gestión de productos y análisis de ventas en tiempo real.",
      achievement:
        "Sistema de auth segura con refresh tokens y roles de usuario",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      demo: "#",
      repo: "#",
      image: "/placeholder.svg?height=200&width=400&text=E-commerce+Dashboard",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones push.",
      achievement:
        "Implementación de WebSockets para colaboración en tiempo real",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      demo: "#",
      repo: "#",
      image: "/placeholder.svg?height=200&width=400&text=Task+Management",
    },
    {
      title: "File Upload Service",
      description:
        "Servicio de subida de archivos con compresión automática, validación de tipos y almacenamiento en la nube.",
      achievement:
        "Optimización de carga con compresión automática y progress tracking",
      tech: ["Express", "Multer", "Sharp", "AWS S3"],
      demo: "#",
      repo: "#",
      image: "/placeholder.svg?height=200&width=400&text=File+Upload+Service",
    },
  ];

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

  const scrollToProjects = (): void => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 to-blue-500/3"></div>
        <div className="container mx-auto text-center z-10 max-w-5xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent leading-tight">
              José María Coronel
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-100 mb-8 font-light">
              Fullstack Developer enfocado en Frontend
            </h2>
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
          </div>

          <div className="mb-16">
            <p className="text-xl md:text-2xl text-cyan-100/90 max-w-4xl mx-auto leading-relaxed font-light">
              "Buscando integrarme en un equipo donde aportar desde el frontend
              y crecer en arquitectura backend"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Code2 className="w-5 h-5 mr-2" />
              Ver Proyectos
            </Button>
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
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <User className="w-10 h-10 inline mr-4" />
            Sobre mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-cyan-100/90 text-lg leading-relaxed">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                Soy un desarrollador autodidacta apasionado por crear
                experiencias web excepcionales. Mi enfoque se centra en escribir
                código limpio y mantener arquitecturas desacopladas que
                faciliten el mantenimiento y escalabilidad de las aplicaciones.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                A través de proyectos reales, he desarrollado expertise en el
                ecosistema React y tecnologías backend modernas. Busco
                constantemente aplicar las mejores prácticas de desarrollo y
                mantenerme actualizado con las últimas tendencias de la
                industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <Settings className="w-10 h-10 inline mr-4" />
            Stack Técnico
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-cyan-300 flex items-center text-xl">
                  <Code2 className="w-6 h-6 mr-3" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-700/50 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-300 flex items-center text-xl">
                  <Database className="w-6 h-6 mr-3" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-800/40 text-blue-200 border-blue-600/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-cyan-300 flex items-center text-xl">
                  <TestTube className="w-6 h-6 mr-3" />
                  Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {testingSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-700/50 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-300 flex items-center text-xl">
                  <Settings className="w-6 h-6 mr-3" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {toolsSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-800/40 text-blue-200 border-blue-600/50 px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <Briefcase className="w-10 h-10 inline mr-4" />
            Proyectos Destacados
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 hover:border-cyan-600/70 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 to-transparent"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-cyan-100 text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-cyan-200/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2 flex items-center">
                      🎯 Logro destacado:
                    </p>
                    <p className="text-cyan-100/80 text-sm leading-relaxed">
                      {project.achievement}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-cyan-600/50 text-cyan-200 bg-cyan-800/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-cyan-600 hover:bg-cyan-700 flex-1 font-medium transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-600/50 text-cyan-300 hover:bg-cyan-600/10 hover:border-cyan-500 flex-1 bg-transparent font-medium transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
