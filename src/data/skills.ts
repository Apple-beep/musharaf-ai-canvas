export interface SkillCategory {
  category: string;
  skills: string[];
  image: string;
  imageAlt: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JavaScript", "MATLAB"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Glowing code cascading across a gradient terminal",
  },
  {
    category: "AI/ML",
    skills: ["OpenAI API", "Google Gemini", "Prompt Engineering", "NLP", "PyTorch", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract neural network nodes illuminated in purple",
  },
  {
    category: "Data",
    skills: ["Pandas", "NumPy", "Tableau", "MySQL", "PostgreSQL", "Bigtable", "Spanner"],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Neon-lit data center corridor with flowing lights",
  },
  {
    category: "Cloud & Systems",
    skills: ["AWS (EC2, S3, IAM)", "Docker", "Kubernetes", "Serverless"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Cloudscape with network constellation overlays",
  },
  {
    category: "Tools",
    skills: ["Git/GitHub", "VS Code", "Jupyter Notebook", "Figma", "Agile/Scrum"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Creative studio desk lit with neon lighting",
  },
  {
    category: "Soft Skills",
    skills: ["Intercultural teamwork", "Tutoring/mentoring", "Problem solving", "Communication"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Collaborative team huddled around a luminous table",
  },
];
