import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    href: "https://github.com/Apple-beep",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/musharaf-khan-pathan",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:mpathan2@hawk.illinoistech.edu",
    label: "Email",
    icon: Mail,
  },
];

export const Footer = () => {
  return (
    <footer className="relative -mt-24">
      <div className="relative overflow-hidden bg-gradient-to-br from-neon-cyan/8 via-background/55 to-neon-violet/8 pb-32 pt-24 backdrop-blur-2xl shadow-[0_-40px_160px_rgba(0,0,0,0.4)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_hsla(278,86%,74%,0.06),_transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-[90rem] px-4 md:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neon-cyan/8 via-background/60 to-neon-violet/10 px-6 py-10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:px-16 md:py-18">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                  Musharaf Khan Pathan
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Dream-first technologist designing immersive, resilient products.
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  Open to collaborations in software engineering, AI/ML, data storytelling, and installation-style product experiments.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {footerLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
                  >
                    <Icon className="h-4 w-4 text-neon-cyan transition-transform duration-200 group-hover:scale-110" />
                    {label}
                  </a>
                ))}
              </div>

              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                © {new Date().getFullYear()} Musharaf Khan Pathan
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
