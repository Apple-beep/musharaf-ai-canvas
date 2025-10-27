import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const heroFacts = [
    { label: "Based in", value: profile.location },
    { label: "Pronouns", value: profile.pronouns },
    { label: "Opportunities", value: profile.openTo.replace(/^Open to\s*/i, "") },
  ];

  const skillHighlights = skills.slice(0, 3);
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
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div className="space-y-8 p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="section-heading">About Musharaf Khan Pathan</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground/85">{profile.about}</p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5 text-left backdrop-blur-xl transition hover:border-neon-cyan/40"
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/60">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                      Signals
                    </span>
                    <div className="grid gap-4 md:grid-cols-2">
                      {profile.signal.map((trait) => (
                        <div
                          key={trait.label}
                          className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl"
                        >
                          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/60">
                            {trait.label}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                            {trait.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col justify-between border-t border-white/10 bg-black/25 lg:border-l lg:border-t-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/70">
                        Studio snapshot
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/85">
                        {profile.availability.detail}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 p-8">
                    <div className="rounded-2xl border border-white/15 bg-black/25 p-6 backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/65">
                        Latest drop
                      </p>
                      <p className="mt-3 text-base font-medium text-foreground">
                        {profile.currentSpotlight.description}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-neon-cyan/40 bg-neon-cyan/15 p-6 text-left text-neon-cyan backdrop-blur-xl">
                      <p className="text-xs uppercase tracking-[0.28em]">Currently crafting</p>
                      <p className="mt-3 text-sm text-neon-cyan/90">{profile.availability.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative">
          <div className="container space-y-10">
            <div className="mx-auto max-w-3xl space-y-3 text-center">
              <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
                Dream stack
              </span>
              <h2 className="section-heading">Signature Capabilities</h2>
              <p className="text-sm text-muted-foreground/75">
                A blend of applied AI, resilient systems, and visual storytelling. Here are a few spaces I love working
                in.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {skillHighlights.map((category) => {
                const previewSkills = category.skills.slice(0, 6);
                return (
                  <div
                    key={category.category}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl transition hover:border-neon-cyan/40 hover:shadow-[0_0_45px_rgba(80,220,255,0.18)]"
                  >
                    <div className="relative h-48 overflow-hidden bg-black">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-white/80 backdrop-blur">
                        {category.category}
                      </span>
                    </div>
                    <div className="space-y-4 p-6">
                      <p className="text-sm text-muted-foreground/80">{previewSkills.join(" · ")}</p>
                      <Link
                        to="/skills"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-neon-cyan transition hover:text-neon-violet"
                      >
                        Explore full toolkit
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
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
