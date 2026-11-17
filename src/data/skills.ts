export interface SkillItem {
  name: string;
  category: "Payments" | "Mobile" | "Frontend" | "Backend" | "Real-Time" | "Databases" | "Cloud & DevOps" | "Architecture" | "AI Integration";
  context: string;
  isPrimary?: boolean;
  proficiencyLevel: "Core Specialist" | "Advanced" | "Proficient";
}

export const skillsCategories = [
  "All",
  "Payments",
  "Mobile",
  "Frontend",
  "Backend",
  "Real-Time",
  "Databases",
  "Cloud & DevOps",
  "Architecture",
  "AI Integration",
] as const;

export type SkillCategory = (typeof skillsCategories)[number];

export const skillsData: SkillItem[] = [
  // Payments
  {
    name: "Stripe",
    category: "Payments",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Payment Intents, mobile SDK checkout, signed webhooks and refunds in the CivilBook marketplace apps and admin CRM.",
  },
  {
    name: "Razorpay",
    category: "Payments",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Orders API, checkout SDK, HMAC signature verification and subscriptions across CivilBook and Kingresearch Academy.",
  },
  {
    name: "Payment Webhooks",
    category: "Payments",
    proficiencyLevel: "Core Specialist",
    context: "Signature-verified, idempotent webhook handlers with retries that drive booking and subscription state.",
  },
  {
    name: "Transaction Lifecycle",
    category: "Payments",
    proficiencyLevel: "Advanced",
    context: "Order creation, authorization, capture, failure handling, refunds and reconciliation-ready ledgers in PostgreSQL.",
  },
  {
    name: "Payment Security",
    category: "Payments",
    proficiencyLevel: "Advanced",
    context: "No raw card storage, server-trusted amounts, secrets in env config, RBAC and audit logs on financial records.",
  },

  // Mobile
  {
    name: "Flutter",
    category: "Mobile",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Primary cross-platform framework used to architect and deliver 6+ production apps across FinTech, IoT, Agriculture, and Marketplaces.",
  },
  {
    name: "Dart",
    category: "Mobile",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Core language used for mobile business logic, stream transformers, thread-isolated background processing, and memory optimization.",
  },
  {
    name: "React Native",
    category: "Mobile",
    proficiencyLevel: "Advanced",
    context: "Cross-platform mobile application development and bridge integration for iOS and Android.",
  },
  {
    name: "Android",
    category: "Mobile",
    proficiencyLevel: "Advanced",
    context: "Native Android platform configuration, Gradle lifecycle, background services, Google Play deployment, and permission scaffolding.",
  },
  {
    name: "iOS",
    category: "Mobile",
    proficiencyLevel: "Advanced",
    context: "Xcode project configuration, Apple certificates/provisioning, App Store releases, and native iOS background execution.",
  },

  // Frontend / Web
  {
    name: "React.js",
    category: "Frontend",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Architected operational web applications and administrative command centers accompanying mobile client platforms.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiencyLevel: "Core Specialist",
    context: "Strict static typing across frontend admin dashboards, API contracts, and shared domain models.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proficiencyLevel: "Advanced",
    context: "Modern ES6+ asynchronous workflows, event loops, DOM mechanics, and dynamic browser logic.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "High-throughput asynchronous backend runtime used for REST APIs, cron automation modules, and stateful socket services.",
  },
  {
    name: "Express.js",
    category: "Backend",
    proficiencyLevel: "Core Specialist",
    context: "Lightweight, scalable web server framework for routing, middleware validation, JWT auth, and rate limiting.",
  },
  {
    name: "Cron Jobs & Schedulers",
    category: "Backend",
    proficiencyLevel: "Core Specialist",
    context: "Engineered fault-tolerant Node.js cron workers and asynchronous task schedulers for high-frequency data aggregations and push alerts.",
  },

  // Real-Time & Streaming
  {
    name: "WebSockets",
    category: "Real-Time",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Low-latency full-duplex TCP streaming for live financial market updates, instant chat, and presence tracking.",
  },
  {
    name: "WebRTC Audio",
    category: "Real-Time",
    proficiencyLevel: "Core Specialist",
    context: "Engineered stable peer-to-peer sound streams and media channels eliminating intermediary server transcoding latency.",
  },
  {
    name: "MQTT Protocol",
    category: "Real-Time",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Lightweight pub/sub messaging integrated with persistent retry buffers for resilient remote IoT machine controls in low-signal rural areas.",
  },

  // State Management
  {
    name: "Bloc Pattern",
    category: "Architecture",
    proficiencyLevel: "Core Specialist",
    context: "Deterministic reactive state management used in high-frequency financial platforms (KingResearch) ensuring zero UI stutter.",
  },
  {
    name: "GetX",
    category: "Architecture",
    proficiencyLevel: "Advanced",
    context: "Lightweight state and reactive dependency management used for high-performance offline-first IoT applications (Peepul Agri).",
  },

  // Databases & Storage
  {
    name: "PostgreSQL",
    category: "Databases",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Multi-tenant schemas, PostGIS radius search, transaction ledgers for payments, and Prisma; subquery refactors cut server response cycles by 20%.",
  },
  {
    name: "MySQL",
    category: "Databases",
    proficiencyLevel: "Advanced",
    context: "Structured data modeling, relational indexing, and ACID transactional pipelines.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    proficiencyLevel: "Advanced",
    context: "Document-based storage for flexible schemas, rapid prototyping, and high-volume event logging.",
  },
  {
    name: "Firebase",
    category: "Databases",
    proficiencyLevel: "Advanced",
    context: "Realtime Database, Cloud Firestore, Firebase Authentication, and Cloud Messaging (FCM) integration.",
  },
  {
    name: "PocketBase",
    category: "Databases",
    proficiencyLevel: "Proficient",
    context: "Embedded backend and realtime database for rapid full-stack application prototyping.",
  },

  // Cloud & DevOps
  {
    name: "AWS (EC2, S3, RDS)",
    category: "Cloud & DevOps",
    isPrimary: true,
    proficiencyLevel: "Advanced",
    context: "Cloud infrastructure provisioning including EC2 compute instances, S3 object storage for assets, and RDS managed databases.",
  },
  {
    name: "GitHub Actions",
    category: "Cloud & DevOps",
    proficiencyLevel: "Core Specialist",
    context: "Configured automated CI/CD deployment pipelines, automated linting, test suites, and staging server deployments.",
  },
  {
    name: "GitLab CI",
    category: "Cloud & DevOps",
    proficiencyLevel: "Advanced",
    context: "Continuous integration runners and deployment stages for multi-branch enterprise projects.",
  },
  {
    name: "Git & Version Control",
    category: "Cloud & DevOps",
    proficiencyLevel: "Core Specialist",
    context: "Git workflow mastery, interactive rebasing, branching strategies, and pull request review enforcement.",
  },

  // Architecture
  {
    name: "Clean Architecture",
    category: "Architecture",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Decoupled domain, data, and presentation boundaries for testable, maintainable enterprise software.",
  },
  {
    name: "MVVM",
    category: "Architecture",
    proficiencyLevel: "Core Specialist",
    context: "Model-View-ViewModel architecture separating UI components from business state machines across Flutter & React.",
  },
  {
    name: "Feature-First Design",
    category: "Architecture",
    proficiencyLevel: "Core Specialist",
    context: "Modular directory structures where domain logic, state, and UI are grouped per business capability.",
  },
  {
    name: "Query Optimization",
    category: "Architecture",
    proficiencyLevel: "Core Specialist",
    context: "Defensive indexing, composite indexes, query plan EXPLAIN execution analysis, and elimination of N+1 subqueries.",
  },
  {
    name: "Multi-Tenant Architecture",
    category: "Architecture",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Tenant schema isolation, granular RBAC and audit logging across financial records in the Civilbook Admin CRM.",
  },

  // AI Integration
  {
    name: "LLM API Orchestration",
    category: "AI Integration",
    isPrimary: true,
    proficiencyLevel: "Core Specialist",
    context: "Integration and orchestration of modern LLM APIs (Gemini, Claude, OpenAI) into application business logic and backend services.",
  },
  {
    name: "Custom AI Agents",
    category: "AI Integration",
    proficiencyLevel: "Advanced",
    context: "Context-aware agents automating complex multi-step task execution, workflow routing, and structured JSON generation.",
  },
  {
    name: "Recommendation Engines",
    category: "AI Integration",
    proficiencyLevel: "Advanced",
    context: "Algorithmic and semantic matching systems for personalized content and entity recommendations.",
  },
];
