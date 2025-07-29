"use client";

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
import { useLanguageStore } from "@/store/useLanguageStore";

const CardProject = ({
  project,
  index,
}: {
  project: project;
  index: number;
}): JSX.Element => {
  const { textLanguage } = useLanguageStore();

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
        <span className="text-gray-400 text-xs">
          {project.isFinished
            ? `${textLanguage.projectsPage.reutilizableText.isFinished}`
            : `${textLanguage.projectsPage.reutilizableText.inProgress}`}
        </span>
        <CardTitle className="text-cyan-100 text-xl">
          {project.title}
          <span className="text-cyan-400">{project.isFinished && "🎉"}</span>
        </CardTitle>
        <CardDescription className="text-cyan-200 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="h-full flex flex-col gap-4">
        <div>
          <p className="text-cyan-400 font-semibold flex items-center">
            🎯 {textLanguage.projectsPage.reutilizableText.mainAchieve}
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
                {textLanguage.projectsPage.reutilizableText.cta.details}
              </Button>
            </Link>

            <div className="flex gap-3">
              <Link
                href={project.links.demo}
                target="_blank"
                className="w-full"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="button-secondary w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {textLanguage.projectsPage.reutilizableText.cta.demo}
                </Button>
              </Link>

              <Link
                href={project.links.code}
                target="_blank"
                className="w-full"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="button-secondary w-full"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {textLanguage.projectsPage.reutilizableText.cta.code}
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
