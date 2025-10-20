import { SkillPill } from "@/components/SkillPill";
import { skills } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-bold">Skills</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive overview of my technical expertise and soft skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category) => (
              <Card key={category.category} className="glass-card-hover">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillPill key={skill} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 glass-card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">Toolbelt</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {["Python", "Java", "SQL", "AWS", "Pandas", "NumPy", "Tableau", "REST", "OpenAI", "Gemini", "Git", "VS Code", "Firebase", "Figma"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="px-6 py-3 rounded-lg glass-card-hover font-medium"
                  >
                    {tool}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
