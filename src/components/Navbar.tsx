import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileDown, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-heading font-bold text-lg">
            Musharaf Khan Pathan
          </Link>
          <span className="px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium border border-neon-cyan/20">
            AI Engineer
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`link-hover text-sm font-medium ${
              isActive("/") ? "text-neon-cyan" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`link-hover text-sm font-medium ${
              isActive("/projects") ? "text-neon-cyan" : "text-muted-foreground"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`link-hover text-sm font-medium ${
              isActive("/experience") ? "text-neon-cyan" : "text-muted-foreground"
            }`}
          >
            Experience
          </Link>
          <Link
            to="/skills"
            className={`link-hover text-sm font-medium ${
              isActive("/skills") ? "text-neon-cyan" : "text-muted-foreground"
            }`}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={`link-hover text-sm font-medium ${
              isActive("/contact") ? "text-neon-cyan" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a
              href="https://github.com/Apple-beep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a
              href="https://www.linkedin.com/in/musharaf-khan-pathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="magnetic-btn">
            <Link to="/resume">
              <FileDown className="h-4 w-4 mr-2" />
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
