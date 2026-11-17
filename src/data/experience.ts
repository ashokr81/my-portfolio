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
    role: "Senior Full Stack Developer",
    company: "Fugen Webtech",
    period: "December 2024 – Present",
    location: "Vijayawada, India",
    isCurrent: true,
    type: "Enterprise",
    leadMetric: {
      value: "40%",
      label: "Faster Primary API Responses",
      description: "Heavy background work moved onto BullMQ + Redis job queues",
    },
    responsibilities: [
      {
        category: "Payments & Marketplace Backend",
        summary: "Payment flows and APIs behind the CivilBook User and Provider apps.",
        points: [
          "Integrated Stripe and Razorpay across the CivilBook apps: server-side order creation, SDK checkout, webhook signature verification and status sync.",
          "Built the complete backend and REST APIs serving thousands of active contractors, suppliers, builders and property owners.",
          "Engineered PostGIS radius filters (30–60 km) plus WebRTC / WebSocket servers for live audio and job bidding.",
        ],
      },
      {
        category: "Civilbook Admin CRM",
        summary: "Multi-tenant React + Node.js + PostgreSQL administration platform, built from scratch.",
        points: [
          "Listings, contractor/provider KYC verification, booking lifecycles and commission payouts.",
          "Multi-tenant schema isolation, granular RBAC and audit logging across property transactions, bids and financial records.",
        ],
      },
      {
        category: "Async Jobs & Performance",
        summary: "Decoupled heavy work from request paths.",
        points: [
          "Implemented BullMQ & Redis job queue clusters for AI embedding generation, batch notifications and invoice generation, cutting primary API response times by 40%.",
        ],
      },
      {
        category: "Agentic AI & RAG",
        summary: "LLM features running inside production backends.",
        points: [
          "Autonomous workflows with OpenAI function calling and Model Context Protocol (MCP) servers for property documentation summaries and contractor compliance checks.",
          "Cloudflare AutoRAG vector ingestion for context-aware search across unstructured construction contracts.",
          "AI-augmented engineering with Claude Code and Antigravity for refactoring and automated test authoring.",
        ],
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "React.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Stripe",
      "Razorpay",
      "WebRTC",
      "MCP",
      "AWS S3",
    ],
  },
  {
    id: "orotron",
    role: "Backend & Full Stack Developer",
    company: "Orotron",
    period: "May 2023 – November 2024",
    location: "Hyderabad, India",
    isCurrent: false,
    type: "Enterprise",
    leadMetric: {
      value: "30%",
      label: "Lower Event Dispatch Latency",
      description: "Socket.io streaming engines at 99.9% uptime during peak market hours",
    },
    responsibilities: [
      {
        category: "Microservices & APIs",
        summary: "Scalable Node.js and Express services for FinTech and IoT clients.",
        points: [
          "Engineered Node.js and Express microservices powering multi-platform client applications across FinTech and IoT analytical domains.",
          "Integrated Razorpay payments for the Kingresearch Academy platform.",
        ],
      },
      {
        category: "Real-Time Event Processing",
        summary: "High-throughput streaming for live market data.",
        points: [
          "Built Socket.io and streaming broker ingestion engines, lowering event dispatch latency by 30% with 99.9% uptime at peak volume.",
          "WebSocket subscription streams and Redis Pub/Sub channels for live index analytics and market signals.",
        ],
      },
      {
        category: "Data & Performance",
        summary: "Schema design, caching and query tuning.",
        points: [
          "Structured normalized PostgreSQL schemas and MongoDB collections with Redis caching, cutting repeated query loads by 45%.",
          "Refactored subqueries and API bottlenecks, reducing server response cycles by 20%.",
        ],
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Razorpay",
      "Microservices",
    ],
  },
  {
    id: "freelance-ecosystem",
    role: "Independent Full Stack Developer",
    company: "Freelance Ecosystem",
    period: "2020 – Present",
    location: "Remote / Global Clients",
    isCurrent: true,
    type: "Freelance",
    leadMetric: {
      value: "3",
      label: "Freelance Apps Live on Play Store",
      description: "Grow Together Farmily, Expenza and Habitor",
    },
    responsibilities: [
      {
        category: "End-to-End Delivery",
        summary: "Full-stack platforms, SaaS tools and cloud backends for global clients.",
        points: [
          "Architected and deployed full-stack platforms with the MERN stack, Next.js, Redis and AWS (EC2, S3, RDS).",
          "Integrated Claude, OpenAI and Gemini APIs into assistants, summarizers and client portals, including the Expenza and Habitor AI apps.",
          "Payment integrations with Stripe and Razorpay for client products.",
        ],
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "AWS",
      "OpenAI",
      "Claude",
      "Gemini",
    ],
  },
];
