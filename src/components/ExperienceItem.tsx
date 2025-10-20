import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <Card className="glass-card-hover">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-heading">{experience.title}</CardTitle>
            <CardDescription className="text-base font-medium mt-1">
              {experience.organization}
            </CardDescription>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <div>{experience.period}</div>
            <div>{experience.location}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-neon-cyan mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
