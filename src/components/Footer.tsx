import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="glass-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>📍 Chicago, IL</span>
            <span className="hidden md:inline">•</span>
            <span className="text-neon-cyan">Open to SWE · AI · Data roles</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Apple-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/musharaf-khan-pathan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mpathan2@hawk.illinoistech.edu"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Musharaf Khan Pathan
          </div>
        </div>
      </div>
    </footer>
  );
};
