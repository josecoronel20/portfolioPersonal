import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Layers } from "lucide-react";

const TechStack = ({
  frontendTech,
  backendTech,
  databaseAuth,
}: {
  frontendTech: string[];
  backendTech: string[];
  databaseAuth: string[];
}): JSX.Element => {
  return (
    <section className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300 flex items-center">
        <Layers className="w-5 h-5 mr-2" />
        Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-cyan-300 flex items-center text-sm">
              <Code2 className="w-4 h-4 mr-2" />
              Frontend
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {frontendTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-cyan-300 flex items-center text-sm">
              <Server className="w-4 h-4 mr-2" />
              Backend
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {backendTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-cyan-300 flex items-center text-sm">
              <Database className="w-4 h-4 mr-2" />
              DB/Auth/Storage
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {databaseAuth.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStack;
