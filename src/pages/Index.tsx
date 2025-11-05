import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Award,
  Cpu,
  Database,
  Globe2,
  Layers,
  Mail,
  MessageSquare,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { CertBadge } from "@/components/CertBadge";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { certifications } from "@/data/certs";
import { skills } from "@/data/skills";

const Index = () => {
  const location = useLocation();

  const emphasisTokens = ["40+", "200+", "Radical AI", "Intel", "AWS", "GRAMMYs", "F1", "IoT"];
  const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const emphasisRegex = new RegExp(`(${emphasisTokens.map(escapeRegex).join("|")})`, "gi");
  const renderWithEmphasis = (text: string) =>
    text.split(emphasisRegex).map((segment, index) => {
      const isMatch = emphasisTokens.some((token) => segment.toLowerCase() === token.toLowerCase());
      return isMatch ? (
        <span key={`${segment}-${index}`} className="text-neon-cyan font-semibold">
          {segment}
        </span>
      ) : (
        <span key={`${segment}-${index}`}>{segment}</span>
      );
    });

  const impactIcons = [Users, Cpu, Activity, Database, Award] as const;
  const impactHighlights = (profile.aboutImpact ?? []).map((highlight, index) => ({
    highlight,
    Icon: impactIcons[index] ?? Award,
  }));
  const specialties = profile.aboutSpecialties ?? [];
  const quickStats = profile.quickStats ?? [];
  const languages = profile.languages ?? [];
  const signalIconMap: Record<string, LucideIcon> = {
    "Architectural mindset": Layers,
    "Community builder": Users,
    "Multi-industry impact": Globe2,
    "Security first": ShieldCheck,
    Recognition: Trophy,
  };
  const signatureSignals =
    profile.signal?.map((signal) => ({
      ...signal,
      Icon: signalIconMap[signal.label] ?? Trophy,
    })) ?? [];
  const cardBase =
    "rounded-[1.75rem] border border-white/12 bg-black/25 p-6 md:p-7 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.35)]";

  const defaultSkillCategory = skills[0]?.category ?? "Languages";
  const getSkillInitial = (skill: string) => {
    const match = skill.trim().match(/[A-Za-z0-9]/);
    return match ? match[0]?.toUpperCase() ?? "" : "";
  };
  const featuredProjects = projects.slice(0, 3);
  const primaryExperience = experience.slice(0, 4);
  const marqueeCerts = [...certifications, ...certifications];
  const contactActions = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      detail: profile.email,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      detail: "Connect on LinkedIn",
    },
  ];

  useEffect(() => {
    if (!location.hash) return;
    const sectionId = location.hash.replace("#", "");
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <div className="relative bg-background/50 text-foreground">
      <Hero />
      <main className="relative z-10 space-y-24 pb-28">
        <section id="about" className="relative">
          <div className="container">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,220,255,0.12),_transparent_62%)]" />
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                <div className="space-y-7 p-8 lg:p-14 xl:p-16">
                  <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="section-heading">About Musharaf Khan Pathan</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
                  </div>
                  <div className={`${cardBase} animate-in fade-in slide-in-from-bottom-6`}>
                    <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Bio</span>
                    <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground/85">
                      <p className="text-lg font-medium text-foreground">{profile.aboutIntro}</p>
                      <p>{profile.aboutBio}</p>
                    </div>
                  </div>
                  <div className={`${cardBase} animate-in fade-in slide-in-from-bottom-8`}>
                    <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                      Quantified impact
                    </span>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {impactHighlights.map(({ highlight, Icon }) => (
                        <div
                          key={highlight}
                          className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl transition hover:border-neon-cyan/40 hover:shadow-[0_0_35px_rgba(80,220,255,0.18)]"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan transition group-hover:bg-neon-cyan/20">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-foreground/95">
                            {renderWithEmphasis(highlight)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${cardBase} animate-in fade-in slide-in-from-bottom-10`}>
                    <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Specialties</span>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {specialties.map((skill) => (
                        <span key={skill} className="group relative inline-flex">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(80,220,255,0.5),_transparent_70%)] opacity-40 blur-md transition duration-300 group-hover:opacity-75 group-hover:blur-lg"
                          />
                          <span
                            className="relative inline-flex items-center rounded-full border border-neon-cyan/35 bg-black/35 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-neon-cyan shadow-[0_0_24px_rgba(80,220,255,0.28)] transition duration-300 group-hover:border-neon-cyan/60 group-hover:text-white"
                          >
                            {skill}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-12">
                    {signatureSignals.map(({ label, detail, Icon }) => (
                      <div
                        key={label}
                        className={`${cardBase} flex flex-col gap-3 transition hover:border-neon-cyan/45 hover:shadow-[0_0_35px_rgba(80,220,255,0.18)]`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/12 text-neon-cyan">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/60">{label}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground/90">
                          {renderWithEmphasis(detail)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6 border-t border-white/10 bg-black/25 px-6 py-8 lg:border-l lg:border-t-0 lg:px-10 xl:px-12 animate-in fade-in slide-in-from-bottom-8">
                  <div className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2.25rem] border border-white/12 bg-gradient-to-br from-neon-cyan/15 via-black/45 to-neon-violet/20 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,220,255,0.35),_transparent_65%)]" />
                    <div className="relative z-10 p-10 xl:p-12">
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-neon-cyan/80">Studio snapshot</p>
                      <p className="mt-4 text-base leading-relaxed text-white/85">
                        {renderWithEmphasis(profile.availability.detail)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className={`${cardBase} animate-in fade-in slide-in-from-bottom-12`}>
                      <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                        Quick stats
                      </span>
                      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-3">
                        {quickStats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left backdrop-blur-xl"
                          >
                            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/60">
                              {stat.label}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-foreground">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`${cardBase} animate-in fade-in slide-in-from-bottom-12 flex flex-col gap-4`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Languages</span>
                        <MessageSquare className="h-4 w-4 text-neon-cyan" />
                      </div>
                      <div className="space-y-4">
                        {languages.map((language) => (
                          <div key={language.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-foreground">{language.name}</span>
                              <span className="text-muted-foreground/70">{language.fluency}</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full animate-gradient-bar bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan"
                                style={{ width: `${language.proficiency}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${cardBase} animate-in fade-in slide-in-from-bottom-14 bg-gradient-to-br from-neon-cyan/12 via-background/45 to-neon-violet/15`}
                  >
                    <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Opportunities</span>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 bg-black/40 px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-neon-cyan shadow-[0_0_25px_rgba(80,220,255,0.2)]">
                        {profile.aboutOpportunities.pill}
                      </span>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground/85">
                        {profile.aboutOpportunities.detail}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[2.25rem] border border-neon-cyan/50 bg-neon-cyan/12 p-8 text-left text-neon-cyan backdrop-blur-2xl shadow-[0_0_48px_rgba(80,220,255,0.28)]">
                    <p className="text-xs uppercase tracking-[0.32em]">Currently crafting</p>
                    <p className="mt-4 text-base font-semibold text-neon-cyan/95">
                      {renderWithEmphasis(profile.availability.status)}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-neon-cyan/80">
                      {renderWithEmphasis(profile.aboutTagline)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative">
          <div className="container space-y-12">
            <div className="relative mx-auto max-w-3xl space-y-3 text-center">
              <div className="pointer-events-none absolute inset-x-10 -top-20 h-40 rounded-full bg-[radial-gradient(circle_at_top,_rgba(80,220,255,0.28),_transparent_70%)] opacity-60 blur-3xl" />
              <h2 className="relative section-heading">My Skills</h2>
            </div>
            <Tabs defaultValue={defaultSkillCategory} className="space-y-8">
              <TabsList className="mx-auto flex h-auto max-w-4xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-black/30 p-2 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground/70 backdrop-blur">
                {skills.map((category) => (
                  <TabsTrigger
                    key={category.category}
                    value={category.category}
                    className="rounded-full border border-transparent px-4 py-2 text-xs font-semibold tracking-[0.24em] text-muted-foreground/70 transition data-[state=active]:border-neon-cyan/40 data-[state=active]:bg-neon-cyan/10 data-[state=active]:text-neon-cyan data-[state=active]:shadow-[0_0_25px_rgba(80,220,255,0.18)]"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skills.map((category) => (
                <TabsContent key={category.category} value={category.category} className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-neon-cyan/45 hover:shadow-[0_0_38px_rgba(80,220,255,0.22)]"
                      >
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neon-cyan/15 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        <div className="relative flex items-center justify-between gap-6">
                          <div className="space-y-2">
                            <h3 className="text-base font-semibold text-foreground">{skill}</h3>
                            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/60">{category.category}</p>
                          </div>
                          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-neon-cyan/35 bg-neon-cyan/10 text-sm font-semibold uppercase text-neon-cyan transition duration-300 group-hover:border-neon-cyan/60 group-hover:bg-neon-cyan/20 group-hover:text-white">
                            {getSkillInitial(skill)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="projects" className="relative">
          <div className="container space-y-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                  Selected work
                </span>
                <h2 className="section-heading">Featured Projects</h2>
                <p className="text-sm text-muted-foreground/80">
                  Interfaces, copilots, and data systems engineered to feel cinematic yet reliable.
                </p>
              </div>
              <Button
                asChild
                variant="ghost"
                className="group rounded-full border border-white/15 bg-black/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                <Link to="/projects">
                  View archive
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className={index === 0 ? "lg:col-span-2" : ""}
                  highlight={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="relative">
          <div className="container space-y-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Impact</span>
                <h2 className="section-heading">Experience</h2>
                <p className="text-sm text-muted-foreground/80">
                  Translating experimentation into outcomes across health, AI, and immersive product teams.
                </p>
              </div>
              <Button
                asChild
                variant="ghost"
                className="group rounded-full border border-white/15 bg-black/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                <Link to="/experience">
                  View full timeline
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan/60 via-white/10 to-transparent" />
              <div className="space-y-10">
                {primaryExperience.map((item) => (
                  <div key={item.id} className="relative pl-6">
                    <div className="absolute -left-[2.1rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-neon-cyan/60 bg-black/35">
                      <span className="h-3 w-3 rounded-full bg-neon-cyan" />
                    </div>
                    <ExperienceItem experience={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="relative">
          <div className="container space-y-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">Foundations</span>
                <h2 className="section-heading">Education</h2>
                <p className="text-sm text-muted-foreground/80 max-w-2xl">
                  Grounded in rigorous computer science paired with architectural thinking for immersive products.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/6 via-background/70 to-white/10 p-10 backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,220,255,0.16),_transparent_60%)]" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">Illinois Institute of Technology</h3>
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      Chicago, IL
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground/85">B.S. Computer Science, Minor in Architecture</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">
                    <span>GPA: 3.8/4.0</span>
                    <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>Expected May 2026</span>
                  </div>
                  <p className="pt-2 text-sm font-medium text-neon-cyan">Dean&apos;s List Scholar (×4)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="relative">
          <div className="container space-y-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                  Badges & signals
                </span>
                <h2 className="section-heading">Certifications & Honors</h2>
              </div>
              <Button
                asChild
                variant="ghost"
                className="group rounded-full border border-white/15 bg-black/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                <Link to="/resume">
                  View resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,220,255,0.14),_transparent_60%)]" />
              <div className="flex w-max gap-6 animate-marquee" style={{ animationDuration: "26s" }}>
                {marqueeCerts.map((cert, index) => (
                  <div key={`${cert.id}-${index}`} className="min-w-[240px]">
                    <CertBadge cert={cert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative">
          <div className="container">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-neon-cyan/12 via-background/70 to-neon-violet/18 p-12 text-center backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsla(188,86%,62%,0.18),_transparent_55%)]" />
              <div className="relative space-y-6">
                <h2 className="font-heading text-balance text-4xl font-semibold text-foreground md:text-5xl">
                  Let’s craft the next dream.
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground/90">
                  Open to internships, research collaborations, and product experiments across AI, software, and data.
                  Bring the wild idea—I’ll help make it tangible.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <Button asChild size="lg" className="magnetic-btn rounded-full">
                    <Link to="/contact">Start a conversation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="magnetic-btn rounded-full border-white/20 bg-black/20"
                  >
                    <Link to="/projects">View case studies</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  {contactActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm uppercase tracking-[0.28em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-foreground"
                    >
                      {action.label === "Email" ? (
                        <Mail className="h-4 w-4 text-neon-cyan" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-neon-cyan" />
                      )}
                      {action.detail}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
};

export default Index;
