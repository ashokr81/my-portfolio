export interface Metric {
  id: string;
  value: string;
  label: string;
  category: "Leadership" | "Performance" | "Scale" | "Velocity";
  context: string;
  sourceCompany: string;
  detail: string;
  highlightColor?: string;
}

export const verifiedMetrics: Metric[] = [
  {
    id: "latency-reduction",
    value: "35%",
    label: "API Response Latency Reduction",
    category: "Performance",
    sourceCompany: "Fugen Webtech",
    context: "Defensive indexing & subquery optimization across legacy relational schemas",
    detail: "Refactored legacy PostgreSQL relational structures via defensive indexing, eliminated redundant nested subqueries, and introduced streamlined query execution plans.",
    highlightColor: "text-cyan-400",
  },
  {
    id: "engagement-boost",
    value: "30%",
    label: "Active User Engagement Increase",
    category: "Scale",
    sourceCompany: "Orotron",
    context: "UI rendering bottleneck elimination & boosted screen-load fluidness",
    detail: "Mitigated frame-drop rendering bottlenecks and widget tree over-rebuilds in Flutter, delivering smooth 60 FPS transitions and boosting daily active session duration.",
    highlightColor: "text-sky-400",
  },
  {
    id: "delivery-velocity",
    value: "15%",
    label: "Faster Production Delivery Loops",
    category: "Velocity",
    sourceCompany: "Orotron",
    context: "Unified cross-platform debugging patterns across iOS & Android",
    detail: "Spearheaded standardized debugging workflows and architecture scaffolding that slashed time-to-market cycles for multi-vertical client releases.",
    highlightColor: "text-emerald-400",
  },
  {
    id: "team-size",
    value: "6",
    label: "Engineers Led in Production",
    category: "Leadership",
    sourceCompany: "Fugen Webtech",
    context: "Commanding cross-functional team across mobile, web & backend",
    detail: "Head engineering team controlling core technical design, architecture standards, code review gates, and automated staging deployment workflows.",
    highlightColor: "text-indigo-400",
  },
  {
    id: "enterprise-exp",
    value: "4+",
    label: "Years Enterprise Experience",
    category: "Leadership",
    sourceCompany: "Fugen Webtech & Orotron",
    context: "Production systems across FinTech, IoT, Agriculture, and E-commerce",
    detail: "Hands-on delivery of production-grade software spanning mobile clients, stateful APIs, and cloud infrastructure.",
    highlightColor: "text-blue-400",
  },
  {
    id: "freelance-exp",
    value: "4+",
    label: "Years Freelance Experience",
    category: "Velocity",
    sourceCompany: "Freelance Ecosystem",
    context: "Global client deliveries with cloud-native hosting & full-stack logic",
    detail: "Architected and launched tailored production applications for global clients, defining business logic, data models, and cloud-native hosting environments.",
    highlightColor: "text-violet-400",
  },
  {
    id: "production-apps",
    value: "6+",
    label: "Production Applications Launched",
    category: "Scale",
    sourceCompany: "Enterprise & Freelance",
    context: "High-complexity apps across diverse industry verticals",
    detail: "Delivered complex consumer-facing marketplaces, high-frequency trading platforms, agricultural IoT monitors, and administrative suites.",
    highlightColor: "text-purple-400",
  },
  {
    id: "downloads-reach",
    value: "50K+",
    label: "Production Downloads Powered",
    category: "Scale",
    sourceCompany: "Enterprise Portfolio",
    context: "Collectively powering 10K to 50K+ live production downloads",
    detail: "Stable, crash-resistant production deployments serving thousands of daily active users across diverse hardware and low-signal networks.",
    highlightColor: "text-amber-400",
  },
];
