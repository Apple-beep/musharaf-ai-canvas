import { Badge } from "@/components/ui/badge";

interface SkillPillProps {
  skill: string;
}

export const SkillPill = ({ skill }: SkillPillProps) => {
  return (
    <Badge
      variant="secondary"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/80 transition hover:border-neon-cyan/40 hover:text-neon-cyan"
    >
      {skill}
    </Badge>
  );
};
