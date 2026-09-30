export interface Profile {
  name: string;
  role: string;
  specialization: string;
  leadership: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  status: string;
  experienceYearsEnterprise: number;
  experienceYearsFreelance: number;
  engineersLed: number;
  productionApps: number;
  downloadsCount: string;
}

export const profileData: Profile = {
  name: "Ashok Rongali",
  role: "Senior Full Stack Developer",
  specialization: "Flutter Specialist",
  leadership: "Engineering Team Lead",
  tagline: "I build and lead production-grade mobile, web and backend systems.",
  summary:
    "High-impact Senior Full Stack Mobile Developer and Engineering Team Lead with 4 years of enterprise and 4+ years of freelance experience delivering high-performance cross-platform architectures. Currently heading a 6-member cross-functional engineering team at Fugen Webtech, controlling core technical design, database scaling, and production delivery. Proven record of launching 6+ complex apps across FinTech, IoT, Agriculture, and E-commerce landscapes, collectively powering 10K to 50K+ production downloads.",
  location: "Visakhapatnam, India",
  email: "rongalaashok25@gmail.com",
  phone: "+91 7287071050",
  linkedin: "https://linkedin.com/in/ashok-r-7bbab2242",
  linkedinDisplay: "linkedin.com/in/ashok-r-7bbab2242",
  github: "https://github.com/ashokr81",
  githubDisplay: "github.com/ashokr81",
  status: "Available for Senior & Lead Engineering Roles",
  experienceYearsEnterprise: 4,
  experienceYearsFreelance: 4,
  engineersLed: 6,
  productionApps: 6,
  downloadsCount: "10K to 50K+",
};

export interface DnaPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  principles: string[];
}

export const engineeringDna: DnaPillar[] = [
  {
    number: "01",
    title: "ARCHITECT",
    subtitle: "Clean Architecture & Scalable Scaffolding",
    description:
      "Strict separation of domain, data, and presentation layers. Feature-first modularization ensuring long-term code maintainability and testability.",
    tags: ["Clean Architecture", "MVVM", "Feature-First", "SOLID"],
    principles: [
      "Decoupled business logic from platform UI widgets",
      "Repository pattern with robust error containment",
      "Predictable state machines with Bloc and reactive state",
    ],
  },
  {
    number: "02",
    title: "BUILD",
    subtitle: "Cross-Platform & Full-Stack Rigor",
    description:
      "End-to-end engineering spanning native-performance Flutter apps, administrative React layers, and high-throughput Node.js/Express APIs.",
    tags: ["Flutter", "Dart", "React.js", "Node.js", "TypeScript"],
    principles: [
      "60 FPS fluid rendering via frame-budget auditing",
      "Defensive typing and schema contracts across clients",
      "Shared business logic and consistent API contracts",
    ],
  },
  {
    number: "03",
    title: "SCALE",
    subtitle: "Data Optimization & Async Workloads",
    description:
      "Relational query restructuring, defensive composite indexing, and asynchronous job schedulers that reduced production API latency by 35%.",
    tags: ["PostgreSQL", "Defensive Indexing", "Cron Schedulers", "Subquery Tuning"],
    principles: [
      "Subquery elimination and query execution plan analysis",
      "Fault-tolerant Node.js cron workers for high-frequency aggregation",
      "Connection pooling and resilient transaction management",
    ],
  },
  {
    number: "04",
    title: "CONNECT",
    subtitle: "Real-Time & Resilient Protocols",
    description:
      "Low-latency streaming architectures powering peer-to-peer WebRTC audio, sub-second financial WebSockets, and low-bandwidth MQTT IoT networks.",
    tags: ["WebSockets", "WebRTC Audio", "MQTT Protocol", "Retry Buffers"],
    principles: [
      "Persistent retry buffers ensuring QoS in low-signal rural areas",
      "Sub-second market ticker broadcasts with zero memory leak",
      "P2P direct audio channels with graceful fallback routing",
    ],
  },
  {
    number: "05",
    title: "SHIP",
    subtitle: "Automated Pipelines & Cloud Infrastructure",
    description:
      "Zero-downtime staging deployment workflows, automated CI/CD pipelines, and cloud-native hosting across AWS EC2, S3, and RDS.",
    tags: ["GitHub Actions", "GitLab CI", "AWS (EC2, S3, RDS)", "Automated Staging"],
    principles: [
      "Automated linting, building, and staging verification on PRs",
      "Immutable cloud storage and managed database backups",
      "Unified debugging patterns slashing delivery loops by 15%",
    ],
  },
  {
    number: "06",
    title: "LEAD",
    subtitle: "Engineering Team Leadership & Quality",
    description:
      "Commanding a 6-person engineering team, establishing uniform code review metrics, unblocking teammates, and driving reliable sprint deliveries.",
    tags: ["6-Person Team Lead", "Code Review Standards", "Architecture Scaffolding", "Sprint Execution"],
    principles: [
      "Standardized architecture templates across all repositories",
      "Rigorous code reviews focused on security and performance",
      "Mentorship and cross-functional alignment between frontend & backend",
    ],
  },
];
