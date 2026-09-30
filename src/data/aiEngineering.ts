export interface AiPipelineStep {
  step: string;
  title: string;
  description: string;
  tech: string;
  badge: string;
}

export interface AiCapability {
  title: string;
  description: string;
  models: string[];
  keyEngineeringAspect: string;
}

export const aiPipelineSteps: AiPipelineStep[] = [
  {
    step: "01",
    title: "Client Input & Telemetry",
    description: "User queries, sensor payloads, or structured event context ingested from Flutter/React clients.",
    tech: "Client SDKs • REST / WebSockets",
    badge: "Ingestion",
  },
  {
    step: "02",
    title: "LLM API Orchestration",
    description: "Model selection, token budget routing, prompt template injection, and fallback retries.",
    tech: "Gemini • Claude • OpenAI APIs",
    badge: "Orchestration",
  },
  {
    step: "03",
    title: "Custom Agent Execution & Logic",
    description: "Context retrieval, task decomposition, business rule validation, and guardrail enforcement.",
    tech: "Custom AI Agents • State Handlers",
    badge: "Reasoning",
  },
  {
    step: "04",
    title: "Structured Schema Output",
    description: "Strict JSON schema enforcement with type verification and automated error handling.",
    tech: "Zod / Typed Parsers",
    badge: "Validation",
  },
  {
    step: "05",
    title: "Application State Update",
    description: "Direct consumption by Flutter and React UI layers, triggering state updates and database writes.",
    tech: "Bloc / GetX • PostgreSQL",
    badge: "Delivery",
  },
];

export const aiCapabilities: AiCapability[] = [
  {
    title: "LLM API Orchestration",
    description:
      "Engineered multi-model routing across Gemini, Claude, and OpenAI APIs with automatic latency-aware fallback routing and token cost optimization.",
    models: ["Google Gemini", "Anthropic Claude", "OpenAI GPT"],
    keyEngineeringAspect: "Fail-safe retry policies and rate-limit backoff protecting production uptime.",
  },
  {
    title: "Custom AI Agents & Workflow Automation",
    description:
      "Constructed autonomous task agents that parse user instructions, query external tools/APIs, and execute multi-step workflows without human intervention.",
    models: ["Function Calling", "Tool Use APIs", "Agent State Machines"],
    keyEngineeringAspect: "Deterministic schema boundaries preventing prompt injection and hallucinated payload structures.",
  },
  {
    title: "Recommendation & Matching Engines",
    description:
      "Designed algorithmic and semantic recommendation engines matching marketplace service providers with consumer requests based on location, availability, and skills.",
    models: ["Embeddings", "Cosine Proximity", "Rank Ordering"],
    keyEngineeringAspect: "Hybrid filtering combining geo-spatial bounding (30-60 km) with content similarity ranking.",
  },
];
