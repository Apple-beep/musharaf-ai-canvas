import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvatarUpload from "@/components/AvatarUpload";
import { profile } from "@/data/profile";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
];

export const Hero = () => {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [pendingAvatar, setPendingAvatar] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--cursor-x", `${x}%`);
      document.documentElement.style.setProperty("--cursor-y", `${y}%`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    const storedAvatar =
      typeof window !== "undefined" ? window.localStorage.getItem("mkp-avatar") : null;
    if (storedAvatar) {
      setAvatarSrc(storedAvatar);
    }

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const credibilityPills = [
    "Built: F1 Database System · Wearable Health Device",
    "Experience/Recognitions: Radical AI · EcoCAR CAV · AWS & GCA",
  ];

  const factPills = [
    { label: "Based in", value: profile.location },
    { label: "Pronouns", value: profile.pronouns },
    { label: "Opportunities", value: "SWE · AI · Data" },
  ];

  const displayAvatar = pendingAvatar ?? avatarSrc ?? null;

  const resetPendingAvatar = () => {
    setPendingAvatar(null);
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setPendingAvatar(result);
      }
    };
    reader.onerror = () => {
      alert("Unable to read the selected image. Please try another file.");
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarSave = async () => {
    if (!pendingAvatar) return;
    try {
      const circularDataUrl = await createCircularAvatar(pendingAvatar);
      setAvatarSrc(circularDataUrl);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("mkp-avatar", circularDataUrl);
      }
      resetPendingAvatar();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while processing the image. Please try another file.");
    }
  };

  const createCircularAvatar = (dataUrl: string) =>
    new Promise<string>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        const size = Math.min(image.width, image.height);
        const canvas = document.createElement("canvas");
        const dimension = 512;
        canvas.width = dimension;
        canvas.height = dimension;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas context not available"));
          return;
        }

        const sx = (image.width - size) / 2;
        const sy = (image.height - size) / 2;

        context.clearRect(0, 0, dimension, dimension);
        context.save();
        context.beginPath();
        context.arc(dimension / 2, dimension / 2, dimension / 2, 0, Math.PI * 2);
        context.closePath();
        context.clip();
        context.drawImage(image, sx, sy, size, size, 0, 0, dimension, dimension);
        context.restore();

        resolve(canvas.toDataURL("image/png"));
      };
      image.onerror = () => reject(new Error("Unable to load image"));
      image.src = dataUrl;
    });

  const handleAvatarCancel = () => {
    resetPendingAvatar();
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-28 md:pt-36">
      <div className="container relative grid items-center gap-16 rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-neon-cyan/8 via-background/55 to-neon-violet/8 p-10 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-3xl lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.85fr)]">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
                Musharaf Khan Pathan
              </h1>
              <p className="text-balance text-lg font-medium text-muted-foreground/85 md:text-2xl">
                AI Engineer & CS Major @ IIT — building immersive, resilient systems. Open to SWE, AI, and Data roles.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {credibilityPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground/70 backdrop-blur"
                >
                  {pill}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/90 md:text-lg">
              I blend architectural thinking with machine intelligence to design interfaces and systems that feel cinematic yet reliable. Recent work spans AI copilots (OpenAI &amp; Gemini), health-tech prototypes, and data-heavy experiences—while mentoring and teaching at IIT.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {factPills.map((fact) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground/70 backdrop-blur"
              >
                <span className="text-muted-foreground/50">{fact.label}:</span>
                <span className="text-foreground/80">{fact.value}</span>
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
              <Button
                asChild
                size="lg"
                className="magnetic-btn group w-full justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-background shadow-[0_0_28px_rgba(80,220,255,0.35)] lg:w-auto"
              >
                <Link to="/#contact" className="inline-flex items-center justify-center">
                  Start a collaboration
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-white/20 bg-black/25 text-muted-foreground transition hover:text-foreground sm:w-auto"
                >
                  <Link to="/#projects" className="inline-flex items-center justify-center">
                    View projects
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-white/20 bg-black/25 text-muted-foreground transition hover:text-foreground sm:w-auto"
                >
                  <a
                    href="/assets/resume/Musharaf_Khan_Pathan_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <FileDown className="h-4 w-4" />
                    Download résumé
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/75 backdrop-blur transition hover:border-neon-cyan/50 hover:text-neon-cyan"
                >
                  <Icon className="h-3.5 w-3.5 text-neon-cyan transition-transform duration-200 group-hover:scale-110" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {profile.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-[160px] flex-1 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-2xl transition duration-300 hover:border-neon-violet/40 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
              >
                <div className="text-2xl font-heading text-foreground md:text-3xl">{metric.value}</div>
                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full min-h-[480px] flex-col items-center text-center">
          <AvatarUpload size={480} src={displayAvatar ?? undefined} onChange={handleFileSelect} />
          {pendingAvatar && (
            <div className="mt-4 flex items-center gap-3">
              <Button
                size="sm"
                className="rounded-full bg-neon-cyan/80 px-5 text-slate-900 transition hover:bg-neon-cyan"
                onClick={handleAvatarSave}
              >
                Save
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-white/20 bg-black/30 text-muted-foreground transition hover:text-foreground"
                onClick={handleAvatarCancel}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
