export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JavaScript", "MATLAB"]
  },
  {
    category: "AI/ML",
    skills: ["OpenAI API", "Google Gemini", "Prompt Engineering", "NLP", "PyTorch", "TensorFlow"]
  },
  {
    category: "Data",
    skills: ["Pandas", "NumPy", "Tableau", "MySQL", "PostgreSQL", "Bigtable", "Spanner"]
  },
  {
    category: "Cloud & Systems",
    skills: ["AWS (EC2, S3, IAM)", "Docker", "Kubernetes", "Serverless"]
  },
  {
    category: "Tools",
    skills: ["Git/GitHub", "VS Code", "Jupyter Notebook", "Figma", "Agile/Scrum"]
  },
  {
    category: "Soft Skills",
    skills: ["Intercultural teamwork", "Tutoring/mentoring", "Problem solving", "Communication"]
  }
];
