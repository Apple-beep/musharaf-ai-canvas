import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: Project;
  className?: string;
  highlight?: boolean;
}

export const ProjectCard = ({ project, className, highlight = false }: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan/40 hover:shadow-glow",
        highlight ? "gap-6 lg:p-10 lg:pt-12" : "gap-5",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/12 via-transparent to-neon-violet/18" />
      </div>

      <div className="relative flex flex-col gap-6">
        {project.image && (
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.35rem] border border-white/8",
              highlight ? "md:-mx-2 md:mt-0" : "",
            )}
          >
            <AspectRatio ratio={16 / (highlight ? 7.5 : 9)}>
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        )}

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
              {project.role}
            </p>
            <h3
              className={cn(
                "font-heading text-2xl font-semibold leading-tight text-foreground",
                highlight && "text-3xl lg:text-4xl",
              )}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {highlight && (
              <span className="hidden rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-neon-cyan md:inline-flex">
                Spotlight
              </span>
            )}
            {project.github && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 rounded-full border border-white/10 bg-background/60 text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 rounded-full border border-white/10 bg-background/60 text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground/90",
            highlight && "text-base",
          )}
        >
          {project.description}
        </p>

        {project.outcome && (
          <p className="text-sm font-medium text-neon-violet">{project.outcome}</p>
        )}

        <div className="relative mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neon-cyan"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
