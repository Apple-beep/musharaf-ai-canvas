export interface Certification {
  id: string;
  title: string;
  issuer: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-cp",
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    note: "In Progress"
  },
  {
    id: "python-spec",
    title: "Python Specialist",
    issuer: "GCA"
  },
  {
    id: "sql-spec",
    title: "SQL Specialist",
    issuer: "GCA"
  },
  {
    id: "grammys-web",
    title: "Website Audience Analysis",
    issuer: "GRAMMYs | Podium"
  },
  {
    id: "intel-data",
    title: "Data Analysis for Sustainability",
    issuer: "Intel | Podium"
  },
  {
    id: "deans-list",
    title: "Dean's List Scholar",
    issuer: "Illinois Tech",
    note: "×4"
  },
  {
    id: "hackerrank",
    title: "CSS, Problem Solving, Java (Basic)",
    issuer: "HackerRank"
  },
  {
    id: "deloitte",
    title: "Cyber, Data Analytics, Technology Job Simulations",
    issuer: "Deloitte"
  },
  {
    id: "tata",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata"
  },
  {
    id: "wells-fargo",
    title: "SWE Job Simulation",
    issuer: "Wells Fargo"
  },
  {
    id: "mastercard",
    title: "Cybersecurity Job Simulation",
    issuer: "Mastercard"
  }
];
