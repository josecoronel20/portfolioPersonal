import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { project } from "@/types/types";

const CardProject = ({
  project,
  index,
}: {
  project: project;
  index: number;
}): JSX.Element => {
  return (
    <Card
      key={index}
      className="bg-cyan-900/20 border-cyan-900 backdrop-blur-sm hover:bg-cyan-900/30 hover:border-cyan-600 transition-all duration-300 flex flex-col gap-4 overflow-hidden"
    >
      <div className="relative">
        <Image
          src={project.details.images[0]?.src || "/placeholder.svg"}
          alt={project.details.images[0]?.alt || project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Header */}
      <CardHeader>
        <CardTitle className="text-cyan-100 text-xl">{project.title}</CardTitle>
        <CardDescription className="text-cyan-200 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="h-full flex flex-col gap-4">
        <div>
          <p className="text-cyan-400 font-semibold flex items-center">
            🎯 Logro destacado:
          </p>
          <p className="text-cyan-100 text-sm leading-relaxed">
            {project.mainAchieve}
          </p>
        </div>

        <section className="flex flex-col gap-4 justify-between h-full">
          {/* Card Tech */}
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-cyan-600 text-cyan-200 bg-cyan-900/50 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Card Buttons */}
          <div className="flex flex-col gap-3">
            <Link href={`/Projects/${project.id}`} className="w-full">
              <Button size="sm" className="button-primary w-full">
                Ver detalles
              </Button>
            </Link>

            <div className="flex gap-3">
              <Link href={project.links.demo} target="_blank" className="w-full">
                <Button
                  size="sm"
                  variant="outline"
                  className="button-secondary w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </Link>

              <Link href={project.links.code} target="_blank" className="w-full">
                <Button
                  size="sm"
                  variant="outline"
                  className="button-secondary w-full"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default CardProject;
