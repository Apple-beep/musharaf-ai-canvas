import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-medium border border-neon-cyan/20">
              <span className="animate-pulse">●</span>
              {profile.openTo}
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {profile.name}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {profile.headline}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              {profile.metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button asChild size="lg" className="magnetic-btn group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="magnetic-btn">
                <Link to="/resume">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="magnetic-btn">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full neon-glow bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 border-2 border-neon-cyan/30 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-background/80 backdrop-blur-xl flex items-center justify-center">
                  <div className="text-6xl font-heading font-bold gradient-text">
                    MKP
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-neon-cyan/20 blur-xl animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-neon-violet/20 blur-xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
