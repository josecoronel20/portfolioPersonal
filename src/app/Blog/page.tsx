"use client";

import FeaturedPosts from "./blogComponents/FeaturedPosts";
import AllPosts from "./blogComponents/AllPosts";
import CallToAction from "./blogComponents/CallToAction";

export default function BlogPosts(): JSX.Element {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizando React con useMemo y useCallback",
      excerpt:
        "Aprende cuándo y cómo usar correctamente useMemo y useCallback para mejorar el rendimiento de tus aplicaciones React sin caer en optimizaciones prematuras.",
      content:
        "En este artículo exploramos las técnicas de optimización más importantes en React, incluyendo ejemplos prácticos y casos de uso reales...",
      date: "15 Dic 2024",
      readTime: "8 min",
      category: "React",
      tags: ["React", "Performance", "Hooks"],
      image: "/placeholder.svg?height=200&width=400&text=React+Optimization",
      featured: true,
    },
    {
      id: 2,
      title: "Arquitectura escalable con Zustand",
      excerpt:
        "Descubre cómo implementar una gestión de estado global escalable usando Zustand, con patrones y mejores prácticas para aplicaciones grandes.",
      content:
        "Zustand se ha convertido en una alternativa ligera y poderosa a Redux. En este post veremos cómo estructurar el estado global...",
      date: "8 Dic 2024",
      readTime: "12 min",
      category: "Estado Global",
      tags: ["Zustand", "Estado", "Arquitectura"],
      image: "/placeholder.svg?height=200&width=400&text=Zustand+Architecture",
      featured: false,
    },
    {
      id: 3,
      title: "Testing efectivo con React Testing Library",
      excerpt:
        "Guía completa para escribir tests robustos y mantenibles en React, enfocándose en testing de comportamiento en lugar de implementación.",
      content:
        "React Testing Library nos ayuda a escribir tests que se enfocan en cómo los usuarios interactúan con nuestra aplicación...",
      date: "1 Dic 2024",
      readTime: "10 min",
      category: "Testing",
      tags: ["Testing", "React", "Jest"],
      image: "/placeholder.svg?height=200&width=400&text=React+Testing",
      featured: false,
    },
    {
      id: 4,
      title: "Autenticación segura con JWT y Next.js",
      excerpt:
        "Implementa un sistema de autenticación robusto usando JWT, cookies httpOnly y middleware de Next.js para máxima seguridad.",
      content:
        "La seguridad en aplicaciones web es crucial. En este tutorial veremos cómo implementar autenticación JWT de forma segura...",
      date: "25 Nov 2024",
      readTime: "15 min",
      category: "Seguridad",
      tags: ["JWT", "Next.js", "Auth", "Seguridad"],
      image: "/placeholder.svg?height=200&width=400&text=JWT+Security",
      featured: false,
    },
    {
      id: 5,
      title: "API REST con Node.js y Express modular",
      excerpt:
        "Construye APIs escalables y mantenibles usando una arquitectura modular con Node.js, Express y mejores prácticas de desarrollo backend.",
      content:
        "Una API bien estructurada es la base de cualquier aplicación robusta. Aprenderemos a crear APIs modulares y escalables...",
      date: "18 Nov 2024",
      readTime: "14 min",
      category: "Backend",
      tags: ["Node.js", "Express", "API", "Backend"],
      image: "/placeholder.svg?height=200&width=400&text=Node+API",
      featured: false,
    },
    {
      id: 6,
      title: "Despliegue automático con Vercel y Railway",
      excerpt:
        "Configura pipelines de CI/CD para desplegar automáticamente tu frontend en Vercel y backend en Railway con GitHub Actions.",
      content:
        "El despliegue automático es esencial para un flujo de desarrollo eficiente. Veremos cómo configurar CI/CD completo...",
      date: "10 Nov 2024",
      readTime: "11 min",
      category: "DevOps",
      tags: ["Vercel", "Railway", "CI/CD", "DevOps"],
      image: "/placeholder.svg?height=200&width=400&text=CI+CD+Deploy",
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Blog Técnico
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed max-w-3xl mx-auto font-light">
            Artículos sobre desarrollo web, mejores prácticas y tecnologías
            modernas
          </p>
        </header>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <FeaturedPosts featuredPosts={featuredPosts} />
        )}

        {/* All Posts */}
        {regularPosts.length > 0 && (
          <AllPosts regularPosts={regularPosts} />
        )}

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
}
