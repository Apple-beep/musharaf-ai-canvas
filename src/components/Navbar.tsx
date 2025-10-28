import { MouseEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  to: string;
  label: string;
  sectionId?: string;
}

const navLinks: NavLink[] = [
  { to: "/#home", label: "Home", sectionId: "home" },
  { to: "/#about", label: "About", sectionId: "about" },
  { to: "/#skills", label: "Skills", sectionId: "skills" },
  { to: "/#projects", label: "Projects", sectionId: "projects" },
  { to: "/#experience", label: "Experience", sectionId: "experience" },
  { to: "/#education", label: "Education", sectionId: "education" },
  { to: "/#certifications", label: "Certifications", sectionId: "certifications" },
  { to: "/#contact", label: "Contact", sectionId: "contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Apple-beep",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/musharaf-khan-pathan",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "mailto:mpathan2work@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeHash, setActiveHash] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "#home";
    }
    return window.location.hash || "#home";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    const syncActive = () => {
      if (typeof window === "undefined") return;
      setActiveHash(window.location.hash || "#home");
    };

    syncActive();
    window.addEventListener("hashchange", syncActive);

    return () => window.removeEventListener("hashchange", syncActive);
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
      setActiveHash(`#${link.sectionId}`);
    }
  };

  const { pathname, hash } = location;

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[min(1500px,98%)] -translate-x-1/2">
      <div className="relative flex items-center justify-between gap-7 overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(10,15,35,0.9)_0%,rgba(10,18,45,0.8)_55%,rgba(22,28,60,0.92)_100%)] px-6 py-3.5 shadow-[0_0_45px_rgba(80,220,255,0.22)] backdrop-blur-3xl sm:px-7 md:px-9">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-40" />
          <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
          <div className="absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50" />
        </div>
        <div className="flex items-center gap-3.5">
          <Link
            to="/"
            onClick={() => setActiveHash("#home")}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-base font-semibold tracking-wide text-foreground transition hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/60 via-neon-violet/40 to-transparent text-xs font-bold text-background shadow-[0_0_16px_rgba(80,220,255,0.45)] transition group-hover:scale-110">
              MKP
            </span>
            <div className="pr-1 leading-tight">
              <span className="block text-[14px] font-semibold text-white whitespace-nowrap">Musharaf&nbsp;Khan</span>
              <span className="block text-[14px] font-semibold text-white/90">Pathan</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-5 md:gap-6">
          <div className="relative hidden max-w-full flex-1 md:block">
            <span className="pointer-events-none absolute left-0 top-0 h-full w-6 rounded-l-[999px] bg-gradient-to-r from-[#090f19] to-transparent" />
            <span className="pointer-events-none absolute right-0 top-0 h-full w-6 rounded-r-[999px] bg-gradient-to-l from-[#090f19] to-transparent" />
            <nav className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/10 bg-white/6 px-2.5 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl overflow-x-auto overscroll-x-contain scrollbar-none">
              {navLinks.map((link) => {
                const isHomeLink = link.sectionId === "home";
                const targetHash = link.sectionId ? `#${link.sectionId}` : "";
                const isActive = link.sectionId
                  ? pathname === "/"
                    ? activeHash === targetHash || (isHomeLink && (!activeHash || activeHash === "#home"))
                    : hash === targetHash
                  : pathname === link.to;
                const baseClasses =
                  "relative inline-flex items-center rounded-full px-3.5 lg:px-5 py-2 text-[13px] lg:text-sm font-medium tracking-wide text-muted-foreground/75 transition duration-200 hover:bg-white/10 hover:text-white hover:shadow-[0_0_18px_rgba(80,220,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
                const activeClasses =
                  "bg-neon-cyan/15 text-neon-cyan shadow-[0_0_18px_rgba(80,220,255,0.35)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.4),transparent_65%)] before:content-['']";
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={(event) => handleNavClick(event, link)}
                    className={`${baseClasses} ${isActive ? activeClasses : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden shrink-0 md:flex items-center gap-2.5 lg:gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-2 shadow-[inset_0_0_18px_rgba(12,20,40,0.85)] backdrop-blur-xl">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.26),rgba(8,12,28,0.92))] text-muted-foreground/75 transition-all duration-300 hover:-translate-y-[2px] hover:border-neon-cyan/60 hover:text-neon-cyan before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)] before:opacity-65 before:content-['']"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(80,220,255,0.2),rgba(8,12,28,0.9))] text-muted-foreground/80 transition-all duration-300 hover:-translate-y-[1.5px] hover:border-neon-cyan/60 hover:text-neon-cyan before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.26),transparent_55%)] before:opacity-55 before:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
