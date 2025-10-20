import { Badge } from "@/components/ui/badge";

interface SkillPillProps {
  skill: string;
}

export const SkillPill = ({ skill }: SkillPillProps) => {
  return (
    <Badge
      variant="outline"
      className="glass-card-hover px-4 py-2 text-sm font-medium border-border/50"
    >
      {skill}
    </Badge>
  );
};
