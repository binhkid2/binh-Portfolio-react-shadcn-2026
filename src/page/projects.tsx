/* eslint-disable @typescript-eslint/no-explicit-any */
// ProjectsPage.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { showToast } from "@/lib/toastSetting";

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const openNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGithubClick = () => {
    if (project.github === null) {
      showToast("error", "Sorry.This code base is private!");
      return;
    }
    openNewTab(project.github);
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      <CardHeader className="relative p-0">
        {project.isFeatured && (
          <Badge
            className="absolute top-2 right-2 z-10 bg-yellow-400 text-yellow-900"
            variant="secondary"
          >
            <Star className="w-3 h-3 mr-1" /> Private
          </Badge>
        )}

        <div className="relative aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="secondary" onClick={handleGithubClick}>
              View Github Code <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>

      <CardFooter>
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => {
            if (!project.url) {
              showToast("error", "Website link is not available.");
              return;
            }
            openNewTab(project.url);
          }}
        >
          Visit Website
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const projectCards = t("projectCards", { returnObjects: true }) as any[];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t("projectsTitle")}</h1>
      <p className="text-muted-foreground mb-9">{t("projectIntro")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectCards.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
