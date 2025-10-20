import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import type { Certification } from "@/data/certs";

interface CertBadgeProps {
  cert: Certification;
}

export const CertBadge = ({ cert }: CertBadgeProps) => {
  return (
    <Card className="glass-card-hover h-full">
      <CardContent className="p-4 flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center">
          <Award className="h-6 w-6 text-neon-cyan" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-sm leading-tight">{cert.title}</h3>
          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          {cert.note && (
            <p className="text-xs text-neon-violet font-medium">{cert.note}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
