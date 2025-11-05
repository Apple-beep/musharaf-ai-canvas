import { Badge } from "@/components/ui/badge";
import { getSkillIcon } from "@/lib/skill-icons";

interface SkillPillProps {
  skill: string;
}

export const SkillPill = ({ skill }: SkillPillProps) => {
  const iconSrc = getSkillIcon(skill);

  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/80 shadow-[0_0_18px_rgba(140,120,255,0.2)] transition hover:border-neon-cyan/60 hover:bg-white/25 hover:text-foreground"
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-5 w-5 shrink-0"
        />
      ) : null}
      <span className="leading-none">{skill}</span>
    </Badge>
  );
};
