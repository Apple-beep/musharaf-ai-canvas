import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI/ML", "Systems", "Data", "Web", "Coursework"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A collection of projects spanning AI/ML, systems programming, data analytics, and web development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="magnetic-btn"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={index === 0 ? "lg:col-span-2" : ""}
                highlight={index === 0}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
