export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent: boolean;
  type: "Enterprise" | "Freelance";
  leadMetric?: {
    value: string;
    label: string;
    description: string;
  };
  responsibilities: {
    category: string;
    summary: string;
    points: string[];
  }[];
  technologies: string[];
}

export const careerTimeline: ExperienceItem[] = [
  {
    id: "fugen-webtech",
    role: "Lead Full Stack Developer",
    company: "Fugen Webtech",
    period: "March 2024 – Present",
    location: "Vijayawada, India",
    isCurrent: true,
    type: "Enterprise",
    leadMetric: {
      value: "35%",
      label: "API Latency Reduction",
      description: "Secured via defensive database indexing and nested subquery optimization",
    },
    responsibilities: [
      {
        category: "Engineering Leadership",
        summary: "Direct technical command of a 6-person cross-functional engineering team.",
        points: [
          "Command a 6-person engineering team across mobile, frontend, and backend disciplines.",
          "Introduced standardized architecture blueprints (Clean Architecture & MVVM) across company repositories.",
          "Established uniform code review quality gates and automated staging deployment workflows.",
        ],
      },
      {
        category: "Backend & Database Optimization",
        summary: "Drastic performance tuning of legacy database layers and API throughput.",
        points: [
          "Refactored legacy relational structures via defensive indexing and optimized subqueries, securing a measurable 35% reduction in API response latency.",
          "Engineered defensive database indexing strategies eliminating sequential table scans on high-traffic endpoints.",
          "Streamlined stateful Node.js and Express backend middleware to handle concurrent client bursts.",
        ],
      },
      {
        category: "System Automation & Schedulers",
        summary: "Built fault-tolerant asynchronous background workers and aggregation jobs.",
        points: [
          "Programmed fault-tolerant Node.js cron modules and asynchronous task schedulers.",
          "Automated high-frequency data aggregations and cross-platform push notifications.",
          "Integrated fail-safe error handling and execution monitoring to prevent scheduler starvation.",
        ],
      },
      {
        category: "Full-Stack Architecture",
        summary: "End-to-end technical direction across client, admin, and server tiers.",
        points: [
          "Direct end-to-end engineering cycles spanning high-performance Flutter mobile systems.",
          "Designed structural React.js administrative layers for operational management.",
          "Connected client applications to stateful Node.js/Express service backends.",
        ],
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "Cron Jobs",
      "Schedulers",
      "GitHub Actions",
      "GitLab CI",
      "AWS (EC2, S3, RDS)",
    ],
  },
  {
    id: "orotron",
    role: "Software Developer",
    company: "Orotron",
    period: "August 2022 – February 2024",
    location: "Hyderabad, India",
    isCurrent: false,
    type: "Enterprise",
    leadMetric: {
      value: "30%",
      label: "User Engagement Increase",
      description: "Driven by rendering bottleneck mitigation & boosted screen-load fluidness",
    },
    responsibilities: [
      {
        category: "Performance Engineering",
        summary: "Deep UI rendering optimization and 60 FPS screen-load fluidness.",
        points: [
          "Identified and mitigated complex UI rendering bottlenecks, generating a 30% increase in active user engagement by boosting screen-load fluidness.",
          "Profiled Flutter rendering pipeline, eliminating extraneous widget builds and memory leaks.",
          "Optimized image caching and dynamic list view virtualizations for instant navigation.",
        ],
      },
      {
        category: "Operational Efficiency",
        summary: "Standardized cross-platform debugging that accelerated release cycles.",
        points: [
          "Spearheaded unified debugging patterns that slashed time-to-market production delivery loops by 15% across iOS and Android applications.",
          "Created consistent logging and error-boundary conventions adopted across mobile squads.",
        ],
      },
      {
        category: "Agile Multi-Vertical Delivery",
        summary: "Architected foundational scaffolding for diverse production verticals.",
        points: [
          "Directed architectural scaffolding for custom business lines across IoT, FinTech, and Agriculture verticals using the Flutter and Dart toolsets.",
          "Implemented state machines using Bloc and GetX for clean separation of business rules.",
        ],
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Bloc",
      "GetX",
      "REST APIs",
      "CI/CD",
      "Git",
      "IoT Systems",
      "FinTech Integrations",
    ],
  },
  {
    id: "freelance-ecosystem",
    role: "Independent Full Stack Developer",
    company: "Freelance Ecosystem",
    period: "2020 – 2023",
    location: "Remote / Global Clients",
    isCurrent: false,
    type: "Freelance",
    leadMetric: {
      value: "4+",
      label: "Years Independent Practice",
      description: "Full-lifecycle production application architecture and delivery",
    },
    responsibilities: [
      {
        category: "End-to-End System Delivery",
        summary: "Autonomous design and deployment of bespoke production applications.",
        points: [
          "Architected and launched tailored production applications for global clients, defining business system logic, full-stack frameworks, and cloud-native hosting environments.",
          "Engineered backend APIs, database schemas, authentication flows, and real-time communication modules.",
          "Managed client stakeholder requirements from concept to app store deployment and cloud infrastructure setup.",
        ],
      },
    ],
    technologies: [
      "Flutter",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "PocketBase",
      "WebSockets",
      "AWS",
    ],
  },
];
