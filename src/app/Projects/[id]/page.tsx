"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, User, Target, ArrowLeft } from "lucide-react";
import ImagesCarousel from "./ProjectDetailComponents/ImagesCarousel";
import TechStack from "./ProjectDetailComponents/TechStack";
import { KeyFeatures } from "./ProjectDetailComponents/KeyFeatures";
import ArchAndDevops from "./ProjectDetailComponents/ArchAndDevops";
import TechnicalChallenge from "./ProjectDetailComponents/TechnicalChallenge";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useParams } from "next/navigation";
import { project } from "@/types/types";
import Link from "next/link";

export default function ProjectDetail(): JSX.Element {
  const { id } = useParams();
  const { textLanguage } = useLanguageStore();
  const project = textLanguage.projectsPage.projects.find(
    (project: project) => project.id === Number(id),
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-8 max-w-6xl ">
        {/* Header del Proyecto */}
        <header className="mb-8 text-center">
          <div className="flex justify-start mb-4">
            <Link href="/Projects">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 py-3 text-base font-medium bg-transparent transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <p className="text-cyan-300">
                  {textLanguage.projectsPage.reutilizableText.cta.back}
                </p>
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h1>
            <span className="text-gray-400 ">
              {project.isFinished
                ? `${textLanguage.projectsPage.reutilizableText.isFinished}`
                : `${textLanguage.projectsPage.reutilizableText.inProgress}`}
            </span>
            <p className="text-base md:text-lg text-cyan-100/90 leading-relaxed max-w-4xl mx-auto font-light">
              {project.description}
            </p>
          </div>
        </header>

        <main>
          {/* Images carousel*/}
          <ImagesCarousel
            projectImages={project.details.images.map((img) => img.src)}
          />

          {/* objective and role */}
          <div className="grid lg:grid-cols-2 gap-4 mb-6">
            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-cyan-300 flex items-center text-base">
                  <Target className="w-4 h-4 mr-2" />
                  {textLanguage.projectsPage.reutilizableText.detail.objective}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-cyan-200/90 text-sm leading-relaxed">
                  {project.details.objective}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-cyan-300 flex items-center text-base">
                  <User className="w-4 h-4 mr-2" />
                  {textLanguage.projectsPage.reutilizableText.detail.role}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-cyan-200/90 text-sm leading-relaxed">
                  {project.details.role}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* tech stack */}
          <TechStack
            frontendTech={project.details.stack.frontend}
            backendTech={project.details.stack.backend}
            databaseAuth={project.details.stack.dbAndAuth}
          />

          {/* key features, architecture and devops, technical challenges */}
          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {/* key features */}
            <KeyFeatures keyFeatures={project.details.mainFeatures} />

            {/* architecture and devops */}
            <ArchAndDevops
              architectureDevOps={Object.values(project.details.devops)}
            />

            {/* technical challenges */}
            <TechnicalChallenge
              challenges={project.details.technicalChallenges}
            />
          </div>

          {/* project links */}
          <section className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={project.links.code} target="_blank">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  🔗 GitHub
                </Button>
              </Link>
              <Link href={project.links.demo} target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 py-3 text-base font-medium bg-transparent transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  🚀 Demo
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
