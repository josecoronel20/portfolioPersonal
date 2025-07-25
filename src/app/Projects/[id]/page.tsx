"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, User, Target, ShoppingCart } from "lucide-react";
import ImagesCarousel from "./ProjectDetailComponents/ImagesCarousel";
import TechStack from "./ProjectDetailComponents/TechStack";
import { KeyFeatures } from "./ProjectDetailComponents/KeyFeatures";
import ArchAndDevops from "./ProjectDetailComponents/ArchAndDevops";
import TechnicalChallenge from "./ProjectDetailComponents/TechnicalChallenge";

export default function ProjectDetail(): JSX.Element {
  const projectImages = [
    "/placeholder.svg?height=400&width=800&text=Dashboard+Admin",
    "/placeholder.svg?height=400&width=800&text=Catálogo+Productos",
    "/placeholder.svg?height=400&width=800&text=Carrito+Compras",
    "/placeholder.svg?height=400&width=800&text=Panel+Usuario",
    "/placeholder.svg?height=400&width=800&text=Checkout+Proceso",
  ];

  const frontendTech = [
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind",
    "Zustand",
    "React Hook Form",
  ];
  const backendTech = ["Node.js", "Express", "API REST modular"];
  const databaseAuth = [
    "PostgreSQL + Prisma",
    "JWT con cookies",
    "Supabase Storage",
  ];

  const keyFeatures = [
    "CRUD completo de productos (admin) con imágenes",
    "Auth con JWT, cookies seguras y validaciones",
    "Carrito persistente (localStorage + backend)",
    "Checkout y órdenes con protección de rutas",
    "Panel de usuario con historial de compras",
  ];

  const architectureDevOps = [
    "API desacoplada y modular",
    "Validación con Zod (frontend/backend)",
    "Despliegue: Vercel (frontend), Railway (backend), Supabase (storage)",
  ];

  const challenges = [
    "Implementación segura de auth y manejo de tokens",
    "Modularización completa del backend",
    "Estado global con Zustand sincronizado con localStorage",
  ];

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-8 max-w-6xl ">
        {/* Header del Proyecto */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Ecommerce Fullstack
          </h1>
          <p className="text-base md:text-lg text-cyan-100/90 leading-relaxed max-w-4xl mx-auto font-light mb-3">
            App fullstack de ecommerce con catálogo, auth, carrito y panel
            admin. Construida para simular un ecommerce real con foco en UX,
            seguridad y arquitectura escalable.
          </p>
          <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 px-3 py-1 text-sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            E-commerce Completo
          </Badge>
        </header>

        <main>
          {/* Images carousel*/}
          <ImagesCarousel projectImages={projectImages} />

          {/* objective and role */}
          <div className="grid lg:grid-cols-2 gap-4 mb-6">
            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-cyan-300 flex items-center text-base">
                  <Target className="w-4 h-4 mr-2" />
                  Objetivo
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-cyan-200/90 text-sm leading-relaxed">
                  Practicar una arquitectura completa y profesional, con
                  autenticación robusta, roles, almacenamiento de imágenes y
                  lógica de negocio desacoplada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-cyan-300 flex items-center text-base">
                  <User className="w-4 h-4 mr-2" />
                  Rol
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-cyan-200/90 text-sm leading-relaxed">
                  <strong className="text-cyan-300">Proyecto individual</strong>{" "}
                  – diseño y desarrollo fullstack.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* tech stack */}
          <TechStack
            frontendTech={frontendTech}
            backendTech={backendTech}
            databaseAuth={databaseAuth}
          />

          {/* key features, architecture and devops, technical challenges */}
          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {/* key features */}
            <KeyFeatures keyFeatures={keyFeatures} />

            {/* architecture and devops */}
            <ArchAndDevops architectureDevOps={architectureDevOps} />

            {/* technical challenges */}
            <TechnicalChallenge challenges={challenges} />
          </div>

          {/* project links */}
          <section className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                🔗 GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 py-3 text-base font-medium bg-transparent transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                🚀 Demo
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
