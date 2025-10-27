export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startDate: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    id: "colorado-resilience",
    title: "Software Engineer Intern",
    organization: "Colorado Resilience",
    location: "Remote – Colorado",
    period: "Oct 2025 – Present",
    startDate: "2025-10",
    description: [
      "Built and deployed ReactJS frontend components with responsive design, state management, and cross-browser compatibility",
      "Developed Flask/Python REST APIs from Swagger specifications with secure routing, database integration, and error handling",
      "Configured Git, Ubuntu, VirtualBox, and AWS environments to support CI/CD pipelines and collaborative development",
      "Contributed to software architecture and change management by updating documentation for scalability and compliance"
    ]
  },
  {
    id: "ecocar",
    title: "CAV Team Member",
    organization: "EcoCAR EV Challenge",
    location: "Chicago, IL",
    period: "Aug 2025 – Present",
    startDate: "2025-08",
    description: [
      "Developing lane-keeping, adaptive cruise control, and object detection systems",
      "Implementing LiDAR/radar/camera sensor fusion for autonomous vehicle capabilities",
      "Working with V2X communication protocols for connected vehicle systems"
    ]
  },
  {
    id: "ta",
    title: "Undergraduate Teaching Assistant",
    organization: "Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Jan 2024 – Present",
    startDate: "2024-01",
    description: [
      "Mentored 100+ students in Systems Programming and Object-Oriented Programming",
      "Taught C, Assembly, Java, data structures, and algorithms",
      "Designed lab exercises and improved student performance by ~15%"
    ]
  },
  {
    id: "gca-analyst",
    title: "Data Analyst",
    organization: "The Global Career Accelerator",
    location: "Remote",
    period: "Jan 2025 – May 2025",
    startDate: "2025-01",
    description: [
      "Leveraged Python (Pandas/NumPy), SQL, and Tableau for data analysis",
      "Built interactive dashboards that cut query time by ~20%",
      "Delivered actionable insights to cross-functional teams"
    ]
  },
  {
    id: "radical-ai",
    title: "AI Engineer",
    organization: "Radical AI (Reality AI Lab)",
    location: "Remote (NYC org)",
    period: "Jun 2024 – Aug 2024",
    startDate: "2024-06",
    description: [
      "Fine-tuned AI models using OpenAI and Google Gemini APIs",
      "Developed personalized career guidance features",
      "Integrated models with platform and implemented continuous feedback loops"
    ]
  }
];
