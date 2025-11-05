export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  outcome?: string;
  tags: string[];
  category: string[];
  github?: string;
  demo?: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "soteria",
    title: "Smart Occupancy & Emergency Response System (Soteria)",
    role: "Software Team Lead",
    description:
      "PoE-powered emergency response prototype; occupancy detection, environmental monitoring, LED evacuation guidance. Python backend + ESP32 integration; real-time monitoring UI; HLK-LD2410C radar, DHT22, MQ135, WS2812B LEDs.",
    outcome: "Reduced response time by ~50% (prototype).",
    tags: ["Python", "IoT", "ESP32", "PoE", "Sensors", "Realtime UI"],
    category: ["Systems", "AI/ML"],
    image: "musharaf-ai-canvas/public/placeholder.svg",
    imageAlt: "Futuristic control room glowing with cyan light",
  },
  {
    id: "wearable-biometric",
    title: "Wearable Biometric Monitoring Device",
    role: "Engineer",
    description:
      "Wristband prototype: heart rate tracking, emergency alerting, caregiver sync. Stack: Python, Bluetooth LE, HCI principles, simple mobile UI + cloud sync.",
    tags: ["Python", "BLE", "HCI", "Realtime", "HealthTech"],
    category: ["Systems", "Web"],
    image: "https://images.unsplash.com/photo-1584467735815-e85c9d7f6c33?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Minimal wearable health device on gradient background",
  },
  {
    id: "f1-database",
    title: "F1 Database Management System",
    role: "Team Lead",
    description: "CLI app with Admin/User modes; CRUD, OLAP, set ops, ranking queries.",
    tags: ["Python", "MySQL", "SQL", "Data Modeling", "Analytics"],
    category: ["Data", "Systems"],
    github: "https://github.com/Apple-beep/f1-database-management-system",
    image: "https://images.unsplash.com/photo-1517638851339-4aa32003c11a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Dynamic data visualization inspired by racing light trails",
  },
  {
    id: "sudoku-csp",
    title: "Sudoku CSP Solver",
    role: "Developer",
    description:
      "Brute Force, Backtracking, CSP w/ Forward-Checking + MRV; ~1000× speedup (82 nodes vs 100k+).",
    tags: ["AI", "CSP", "Algorithms", "Python"],
    category: ["AI/ML", "Coursework"],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Neon puzzle grid hovering in deep space",
  },
  {
    id: "healthmate",
    title: "HealthMate: Elderly Healthcare Management System",
    role: "Systems Designer / SWE",
    description:
      "Health routines, medication tracking, emergency alerts; wearable + mobile + caregiver dashboard. Focus on elderly-first HCI; baseline thresholds + anomaly detection.",
    tags: ["Web", "HCI", "Bluetooth", "REST", "Firebase"],
    category: ["Web", "Systems"],
    image: "https://images.unsplash.com/photo-1582719470891-121b0e952b26?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Soothing medical dashboard with soft lighting",
  },
];
