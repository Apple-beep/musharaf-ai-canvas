import { ExperienceItem } from "@/components/ExperienceItem";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-bold">Experience</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A timeline of my professional journey in AI engineering, data analytics, and software development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 glass-card p-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Illinois Institute of Technology</h3>
              <p className="text-muted-foreground">
                B.S. Computer Science (Minor in Architecture)
              </p>
              <p className="text-sm text-muted-foreground">
                GPA: 3.8/4.0 • Expected May 2026
              </p>
              <p className="text-sm text-neon-cyan font-medium pt-2">
                Dean's List Scholar (×4)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
