import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const BlogSection = (): JSX.Element => {
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
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <BookOpen className="w-10 h-10 inline mr-4" />
          Contenido Técnico
        </h2>

        <div className="grid grid-cols-1 gap-8">
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
  );
};

export default BlogSection;
