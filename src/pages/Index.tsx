import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { CertBadge } from "@/components/CertBadge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { certifications } from "@/data/certs";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const recentExperience = experience.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-3xl font-bold">About</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
          </div>
          <div className="glass-card p-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 rounded-full bg-neon-violet/10 text-neon-violet text-sm font-medium border border-neon-violet/20">
                {profile.location}
              </span>
              <span className="px-3 py-1 rounded-full bg-border/50 text-muted-foreground text-sm font-medium">
                {profile.pronouns}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-3xl font-bold">Featured Projects</h2>
              <div className="h-px w-32 bg-gradient-to-r from-border to-transparent"></div>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link to="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-3xl font-bold">Experience</h2>
              <div className="h-px w-32 bg-gradient-to-r from-border to-transparent"></div>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link to="/experience">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {recentExperience.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-3xl font-bold">Certifications & Honors</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertBadge key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12 text-center space-y-6">
          <h2 className="font-heading text-4xl font-bold gradient-text">
            Let's build something useful.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking internship and research opportunities in software engineering, AI/ML, cloud, and data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button asChild size="lg" className="magnetic-btn">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="magnetic-btn">
              <Link to="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
