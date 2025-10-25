import { MouseEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, FileDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  to: string;
  label: string;
  sectionId?: string;
}

const navLinks: NavLink[] = [
  { to: "/#home", label: "Home", sectionId: "home" },
  { to: "/#projects", label: "Projects", sectionId: "projects" },
  { to: "/#experience", label: "Experience", sectionId: "experience" },
  { to: "/#skills", label: "Skills", sectionId: "skills" },
  { to: "/#contact", label: "Contact", sectionId: "contact" },
];

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

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (!link.sectionId) return;
    if (location.pathname !== "/") return;
    const section = document.getElementById(link.sectionId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      const targetUrl = link.sectionId === "home" ? "/" : link.to;
      window.history.replaceState(null, "", targetUrl);
    }
  };

  const { pathname, hash } = location;

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[min(calc(100%-2rem),1100px)] -translate-x-1/2">
      <div className="relative flex h-[4.25rem] items-center justify-between gap-8 overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(10,15,35,0.88)_0%,rgba(10,18,45,0.78)_60%,rgba(20,25,55,0.88)_100%)] px-6 shadow-[0_0_40px_rgba(80,220,255,0.18)] backdrop-blur-3xl md:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-40" />
          <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
          <div className="absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold tracking-wide text-foreground transition hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/60 via-neon-violet/40 to-transparent text-xs font-bold text-background shadow-[0_0_12px_rgba(80,220,255,0.45)] transition group-hover:scale-110">
              MKP
            </span>
            Musharaf Khan Pathan
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isHomeLink = link.sectionId === "home";
              const isActive = link.sectionId
                ? hash === `#${link.sectionId}` ||
                  (isHomeLink && pathname === "/" && (!hash || hash === "#home"))
                : pathname === link.to;
              const baseClasses =
                "relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium tracking-wide text-muted-foreground/80 transition-all duration-300 hover:text-neon-cyan";
              const activeClasses =
                "bg-neon-cyan/15 text-neon-cyan shadow-[0_0_18px_rgba(80,220,255,0.35)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.4),transparent_65%)] before:content-['']";
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(event) => handleNavClick(event, link)}
                  className={`${baseClasses} ${
                    isActive
                      ? activeClasses
                      : "hover:bg-white/10 hover:shadow-[inset_0_0_12px_rgba(80,220,255,0.12)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-2 py-1.5 shadow-[inset_0_0_18px_rgba(12,20,40,0.85)] backdrop-blur-xl">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.22),rgba(8,12,28,0.88))] text-muted-foreground/80 transition-all duration-300 hover:-translate-y-[1px] hover:border-neon-cyan/60 hover:text-neon-cyan before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)] before:opacity-60 before:content-['']"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.18),rgba(8,12,28,0.88))] text-muted-foreground/80 transition-all duration-300 hover:-translate-y-[1px] hover:border-neon-cyan/60 hover:text-neon-cyan before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)] before:opacity-50 before:content-['']"
              >
                <a href="https://github.com/Apple-beep" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.18),rgba(8,12,28,0.88))] text-muted-foreground/80 transition-all duration-300 hover:-translate-y-[1px] hover:border-neon-cyan/60 hover:text-neon-cyan before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)] before:opacity-50 before:content-['']"
              >
                <a
                  href="https://www.linkedin.com/in/musharaf-khan-pathan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex rounded-full bg-white px-5 py-2 font-semibold uppercase tracking-[0.32em] text-slate-900 shadow-[0_18px_45px_-18px_rgba(80,220,255,0.7)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_55px_-18px_rgba(80,220,255,0.8)]"
            >
              <Link to="/resume" className="inline-flex items-center gap-2">
                <FileDown className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
