import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Cpu,
  Database,
  Languages,
  MapPin,
  ShieldCheck,
  Target,
} from "lucide-react";

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm leading-none text-zinc-200 backdrop-blur">
    {children}
  </span>
);

type StatCardProps = {
  label: string;
  value: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

const StatCard = ({ label, value, icon: Icon }: StatCardProps) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-lg">
    <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
    <div>
      <div className="text-xs uppercase tracking-wide text-zinc-400">{label}</div>
      <div className="text-zinc-100">{value}</div>
    </div>
  </div>
);

const SigCard = ({ title, text }: { title: string; text: string }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 backdrop-blur">
    <div className="text-sm font-medium text-zinc-100">{title}</div>
    <p className="mt-2 text-sm text-zinc-300">{text}</p>
  </div>
);

const specialties = [
  "AI/ML",
  "Python",
  "ReactJS",
  "Flask",
  "AWS",
  "SQL",
  "Data Science",
  "System Architecture",
  "Cybersecurity",
  "IoT",
  "Software Engineering",
  "Mentorship",
  "Collaboration",
  "Problem-Solving",
] as const;

const stats = [
  { label: "Based in", value: "Chicago, Illinois", icon: MapPin },
  { label: "Pronouns", value: "He/Him", icon: Languages },
  { label: "Opportunities", value: "Internships & Research · SWE · AI · Cybersecurity · Product", icon: Target },
  { label: "GPA", value: "3.8 / 4.0", icon: Award },
] as const;

const signatureSignals = [
  {
    title: "Architectural Mindset",
    text: "Spatial design keeps my interfaces structured, discoverable, and human-first.",
  },
  {
    title: "Community Builder",
    text: "Studio-style leadership: 40+ events mentoring 200+ peers from confusion to clarity.",
  },
  {
    title: "Recognition",
    text: "Honored by Intel, AWS, and The GRAMMYs for cinematic, resilient builds.",
  },
  {
    title: "Cybersecurity Advocate",
    text: "Privacy-first IoT and AI deployments with resilient, threat-aware patterns.",
  },
] as const;

type RightColumnCard = {
  title: string;
  body: string;
  gradient: string;
  imageSrc?: string;
  imageAlt?: string;
};

const rightColCards: RightColumnCard[] = [
  {
    title: "Studio Snapshot",
    body: "Designing cinematic AI canvases and guiding cross-disciplinary build sessions at Illinois Tech.",
    gradient: "bg-white/5",
    imageSrc: "/assets/images/code-orb.svg",
    imageAlt: "Stylized coding interface graphic",
  },
  {
    title: "Latest Drop",
    body: "Launched a privacy-first sensor-to-cloud wearable pipeline with explainable dashboards for clinicians.",
    gradient: "bg-white/5",
  },
  {
    title: "Currently Crafting",
    body: "Prototyping immersive AI copilots and IoT health modules on AWS with scale in mind.",
    gradient: "bg-gradient-to-br from-cyan-500/10 to-indigo-500/10",
  },
] as const;

const languages = [
  { name: "English", note: "Native" },
  { name: "Hindi", note: "Native" },
  { name: "Telugu", note: "Native" },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-16 sm:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(4,12,32,0.9),rgba(6,10,28,0.92)_40%,rgba(6,8,20,0.95)_95%)] p-6 text-zinc-100 backdrop-blur-3xl shadow-[0_40px_140px_rgba(6,12,32,0.65)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(12,204,255,0.22),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_70%_at_80%_95%,rgba(134,102,255,0.18),transparent_60%)]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="relative grid grid-cols-1 gap-8 lg:grid-cols-5"
          >
            <motion.div variants={cardVariants} className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-[radial-gradient(1200px_600px_at_0%_-10%,rgba(0,243,255,0.12),transparent)] from-cyan-400/10 to-transparent p-6 text-zinc-100 backdrop-blur-xl sm:p-8">
                <h2 id="about-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  About Musharaf Khan Pathan
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
                  I’m an AI engineer, software developer, and security-minded technologist at Illinois Tech, blending
                  architecture’s spatial clarity with machine intelligence to craft cinematic, resilient systems.
                  Prototyping immersive AI, shipping full-stack and IoT deployments, always with a mindset for privacy
                  and scale. My portfolio spans privacy-first health-tech devices, secure AI copilots, and immersive data
                  platforms recognized by
                  <span className="font-medium text-white"> Intel</span>,
                  <span className="font-medium text-white"> AWS</span>, and
                  <span className="font-medium text-white"> The GRAMMYs</span>. Led 40+ immersive workshops leveling up
                  200+ peers in coding and system design.
                  {" "}
                  <strong>Currently seeking internships and research roles in software, AI, cybersecurity, and product design—where structured thinking and human-first solutions matter most.</strong>
                  <br />
                  <br />
                  Keywords: Python, ReactJS, Flask, SQL, AWS, IoT, Data Science, System Architecture, Mentorship,
                  Collaboration, Problem-Solving.
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Mentor, cross-team communicator, always curious—led 40+ immersive workshops mentoring 200+ peers.
                  </li>
                  <li className="flex items-start gap-2">
                    <Cpu className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Prototyping immersive AI copilots and automation pipelines across Python, ReactJS, Flask, and AWS.
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Privacy-first IoT and cybersecurity builds from sensor hardware to resilient threat models.
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Full-stack data platforms with analytics pipelines (Flask + SQL + ReactJS).
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
                    Recognition from Intel, AWS, and The GRAMMYs; Dean's List ×4.
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {specialties.map((keyword) => (
                    <Pill key={keyword}>{keyword}</Pill>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {signatureSignals.map(({ title, text }) => (
                  <motion.div key={title} variants={cardVariants}>
                    <SigCard title={title} text={text} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-4 lg:col-span-2">
              {rightColCards.map(({ title, body, gradient, imageSrc, imageAlt }, index) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 * index }}
                  className={`rounded-2xl border border-white/10 ${gradient} p-5 text-zinc-200 backdrop-blur`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-zinc-400">{title}</div>
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={imageAlt ?? title}
                        className="h-24 w-24 shrink-0 rounded-[2.1rem] border border-white/20 bg-white/10 p-4 shadow-[0_24px_64px_rgba(16,24,48,0.45)]"
                      />
                    ) : null}
                  </div>
                  <p className="mt-3 leading-relaxed">{body}</p>
                </motion.div>
              ))}

              <motion.div
                variants={cardVariants}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200 backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                  <div className="text-sm font-medium text-white">Languages</div>
                </div>
                {languages.map(({ name, note }) => (
                  <div key={name} className="mt-3">
                    <div className="flex justify-between text-xs text-zinc-400">
                      <span>{name}</span>
                      <span>{note}</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full w-full animate-[pulse_2.2s_ease-in-out_infinite] bg-gradient-to-r from-cyan-400/70 via-sky-400/80 to-indigo-400/70"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
