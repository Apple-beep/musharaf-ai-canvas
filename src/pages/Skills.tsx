import { SkillPill } from "@/components/SkillPill";
import { skills } from "@/data/skills";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const toolbelt = [
  "Python",
  "Java",
  "TypeScript",
  "SQL",
  "AWS",
  "Pandas",
  "NumPy",
  "REST",
  "OpenAI",
  "Gemini",
  "Docker",
  "Firebase",
  "Supabase",
  "Figma",
];

const Skills = () => {
  return (
    <div className="pt-28 pb-24">
      <div className="container space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
            Craft
          </p>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Skills
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground/90">
            A systems-minded toolkit covering full-stack engineering, applied AI, data storytelling, and the soft skills
            that keep teams shipping.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.category}
              className="group glass-card flex flex-col gap-5 overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-0 backdrop-blur-2xl transition hover:border-neon-cyan/45 hover:shadow-[0_0_60px_rgba(140,120,255,0.25)]"
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/30 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/10 bg-black/35 px-4 py-1 text-[0.7rem] uppercase tracking-[0.32em] text-white/80 backdrop-blur">
                  {category.category}
                </span>
              </div>
              <div className="space-y-4 px-6 pb-6">
                <div className="space-y-2">
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {category.category}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                    Dream tools I reach for
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="glass-card rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Toolbelt</h2>
              <p className="text-sm text-muted-foreground/80">
                The technologies and platforms I reach for when building resilient, delightful products.
              </p>
            </div>
            <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-neon-cyan">
              Versatile by design
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {toolbelt.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-background/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition hover:border-neon-cyan/40 hover:text-neon-cyan"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
