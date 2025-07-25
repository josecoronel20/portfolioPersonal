"use client";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import CardProject from "../homeComponents/mainProjectsSection/CardProject";

//Componente ProjectsPage que renderiza la sección de proyectos.
const ProjectsPage = (): JSX.Element => {
  //importa el idioma del store
  const { textLanguage } = useLanguageStore();
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
    <main className="min-h-screen bg-color-to-b py-16 px-4 flex flex-col gap-12">
      <h1 className="text-4xl font-bold text-cyan-300">
        {textLanguage.projects.title}
      </h1>

      <section>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
