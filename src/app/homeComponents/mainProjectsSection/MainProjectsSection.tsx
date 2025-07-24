import { Briefcase } from "lucide-react";
import React from "react";
import CardProject from "./CardProject";
import FadeInSection from "@/components/reutilizable/FadeInSection";

const MainProjectsSection = (): JSX.Element => {
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

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-cyan-950">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection direction="right">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <Briefcase className="w-10 h-10 inline mr-4" />
            Proyectos Destacados
          </h2>
        </FadeInSection>

        <FadeInSection direction="left">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} index={index} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default MainProjectsSection;
