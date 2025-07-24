import { Code2, Database, Settings, TestTube } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TecnicStackSection = (): JSX.Element => {
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

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/10 to-cyan-900/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <Settings className="w-10 h-10 inline mr-4" />
          Stack Técnico
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-bg-card/50 backdrop-blur-sm hover:bg-bg-card-hover/30 transition-all duration-300 border-cyan-900 hover:border-cyan-600">
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
                    className="bg-cyan-900 text-cyan-200 border-cyan-600/50 text-sm font-semibold px-3 py-1 hover:bg-cyan-900/70 border-cyan-900 hover:border-cyan-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-card/50 backdrop-blur-sm hover:bg-bg-card-hover/30 transition-all duration-300 border-cyan-900 hover:border-cyan-600">
            <CardHeader className="pb-4">
              <CardTitle className="text-cyan-300 flex items-center text-xl">
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
                    className="bg-cyan-900 text-cyan-200 border-cyan-600/50 text-sm font-semibold px-3 py-1 hover:bg-cyan-900/70 border-cyan-900 hover:border-cyan-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-card/50 backdrop-blur-sm hover:bg-bg-card-hover/30 transition-all duration-300 border-cyan-900 hover:border-cyan-600">
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
                    className="bg-cyan-900 text-cyan-200 border-cyan-600/50 text-sm font-semibold px-3 py-1 hover:bg-cyan-900/70 border-cyan-900 hover:border-cyan-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-bg-card/50 backdrop-blur-sm hover:bg-bg-card-hover/30 transition-all duration-300 border-cyan-900 hover:border-cyan-600">
            <CardHeader className="pb-4">
              <CardTitle className="text-cyan-300 flex items-center text-xl">
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
                    className="bg-cyan-900 text-cyan-200 border-cyan-600/50 text-sm font-semibold px-3 py-1 hover:bg-cyan-900/70 border-cyan-900 hover:border-cyan-600"
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
  );
};

export default TecnicStackSection;
