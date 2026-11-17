export interface ArchNode {
  id: string;
  name: string;
  role: string;
  technology: string;
  purpose: string;
  relevantProject: string;
  engineeringConsiderations: string;
  iconName: "smartphone" | "server" | "database" | "radio" | "cpu" | "cloud" | "clock" | "shield" | "activity";
}

export interface SystemModel {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  nodes: ArchNode[];
  flowDescription: string[];
}

export const systemArchitectureModels: SystemModel[] = [
  {
    id: "arch-relational-scale",
    title: "High-Throughput Mobile API & Defensive Relational Indexing",
    tagline: "Architecture behind fast, index-backed production endpoints.",
    badge: "Scale & Performance",
    description:
      "A battle-tested client-to-database architectural flow featuring defensive indexing, subquery elimination, and connection pooling that keep API latency low under peak loads.",
    nodes: [
      {
        id: "node-client",
        name: "Client Mobile Apps",
        role: "Flutter (Dart)",
        technology: "Flutter (iOS / Android)",
        purpose: "Render responsive UI, perform local schema validation, and communicate via keep-alive HTTP/2 connections.",
        relevantProject: "Civilbook & Fugen Enterprise Apps",
        engineeringConsiderations: "Pre-validating request schemas on the client reduces superfluous roundtrips and protects backend resources.",
        iconName: "smartphone",
      },
      {
        id: "node-api",
        name: "API Gateway & Router",
        role: "Node.js / Express Service",
        technology: "Node.js • Express • JWT",
        purpose: "Stateless request sanitization, token validation, rate-limiting, and structured routing.",
        relevantProject: "Fugen Webtech Enterprise Suite",
        engineeringConsiderations: "Stateless architecture allows horizontal scaling behind AWS Application Load Balancers with zero session sticky requirements.",
        iconName: "server",
      },
      {
        id: "node-query-optimizer",
        name: "Query Optimization Layer",
        role: "Defensive Indexing Engine",
        technology: "PostgreSQL B-Tree & Composite Indexes",
        purpose: "Execute selective index scans, eliminating sequential table scans on multi-million row tables.",
        relevantProject: "Fugen Webtech & Civilbook",
        engineeringConsiderations: "Analyzed query execution plans using EXPLAIN ANALYZE; eliminated nested correlated subqueries in favor of indexed joins.",
        iconName: "activity",
      },
      {
        id: "node-database",
        name: "Relational Persistence",
        role: "PostgreSQL Database",
        technology: "PostgreSQL • Connection Pooling",
        purpose: "ACID transactional integrity, geospatial radius bounding, and relational foreign-key consistency.",
        relevantProject: "Civilbook Marketplace",
        engineeringConsiderations: "Connection pooling prevents thread exhaustion during traffic spikes; tuned shared buffers and work_mem parameters.",
        iconName: "database",
      },
    ],
    flowDescription: [
      "Client requests dispatch through rate-limited Express middleware with sanitized payloads.",
      "Optimized query plans utilize composite indexes matching query filter cardinality.",
      "Result sets stream back with low round-trip latency.",
    ],
  },
  {
    id: "arch-realtime-streaming",
    title: "Sub-Second Real-Time Streaming & Audio Pipeline",
    tagline: "Bi-directional WebSocket streaming and P2P WebRTC media transmission.",
    badge: "Real-Time Systems",
    description:
      "Low-latency real-time pipeline powering sub-second market ticker broadcasts, live order books, and direct peer-to-peer audio calls without central media transcoding bottlenecks.",
    nodes: [
      {
        id: "node-stream-client",
        name: "Streaming Mobile Surface",
        role: "Flutter + Bloc State Machine",
        technology: "Flutter • Dart Isolates • WebRTC",
        purpose: "Render 60 FPS live updating charts and handle hardware audio input/output streams.",
        relevantProject: "KingResearch Academy & Civilbook",
        engineeringConsiderations: "Parsing high-frequency packets inside Dart background Isolates avoids stutter on main UI thread.",
        iconName: "smartphone",
      },
      {
        id: "node-stream-socket",
        name: "WebSocket Ingestion Hub",
        role: "Full-Duplex Socket Engine",
        technology: "WebSockets • Heartbeat Telemetry",
        purpose: "Maintain persistent TCP connections, manage channel subscriptions, and multiplex ticker streams.",
        relevantProject: "KingResearch Academy",
        engineeringConsiderations: "Heartbeat pings with exponential reconnect backoff; customized backpressure buffers prevent slow-consumer packet drop.",
        iconName: "radio",
      },
      {
        id: "node-stream-webrtc",
        name: "WebRTC P2P Audio Gateway",
        role: "Signaling & Direct Media",
        technology: "WebRTC • STUN / TURN Fallback",
        purpose: "Negotiate SDP handshakes and establish direct peer-to-peer audio channels.",
        relevantProject: "Civilbook Marketplace",
        engineeringConsiderations: "Direct P2P paths eliminate intermediary server audio transcoding costs and achieve sub-150ms voice latency.",
        iconName: "activity",
      },
      {
        id: "node-stream-broadcast",
        name: "Event Distribution Node",
        role: "Node.js Realtime Dispatcher",
        technology: "Node.js • Event Emitters",
        purpose: "Broadcast room state transitions and multi-client signaling packets.",
        relevantProject: "Civilbook & KingResearch",
        engineeringConsiderations: "Zero memory-leak architecture by strictly managing listener lifecycle and unhooking disconnected socket handlers.",
        iconName: "server",
      },
    ],
    flowDescription: [
      "WebSockets maintain an always-open low-overhead binary/JSON pipeline for ticker updates.",
      "Calculated index deltas trigger fine-grained Flutter Bloc state mutations without redrawing parent trees.",
      "Audio calls initiate over WebRTC signaling, transferring voice directly peer-to-peer.",
    ],
  },
  {
    id: "arch-iot-resilience",
    title: "Resilient Low-Bandwidth IoT Edge Control Loop",
    tagline: "Remote agricultural machine control with persistent retry buffers over erratic cellular connections.",
    badge: "IoT & Hardware Automation",
    description:
      "Engineered specifically for low-signal rural environments, ensuring guaranteed execution of remote machine commands via MQTT QoS 1 and local persistent retry buffers.",
    nodes: [
      {
        id: "node-iot-app",
        name: "Mobile Operator App",
        role: "Flutter (GetX Reactive UI)",
        technology: "Flutter • GetX Architecture",
        purpose: "Display clear equipment status (Active, Queued, Confirmed) and initiate toggle triggers.",
        relevantProject: "Peepul Agri IoT Platform",
        engineeringConsiderations: "Optimistic UI state with instant visual feedback and clear indication of buffer/confirmation state.",
        iconName: "smartphone",
      },
      {
        id: "node-iot-buffer",
        name: "Persistent Retry Buffer",
        role: "Local SQLite Queue",
        technology: "SQLite • Idempotent Tokens",
        purpose: "Persist unsent or unacknowledged commands locally across app restarts or signal blackouts.",
        relevantProject: "Peepul Agri IoT Platform",
        engineeringConsiderations: "Unique UUID command tokens prevent accidental double actuation of heavy farm machinery.",
        iconName: "shield",
      },
      {
        id: "node-iot-mqtt",
        name: "MQTT Message Broker",
        role: "Lightweight Pub/Sub Broker",
        technology: "MQTT Protocol • QoS Level 1",
        purpose: "Deliver compact binary messages with minimal overhead over 2G/GSM rural cell networks.",
        relevantProject: "Peepul Agri IoT Platform",
        engineeringConsiderations: "Minimal packet footprint keeps cellular data usage minimal and survives high carrier packet loss.",
        iconName: "radio",
      },
      {
        id: "node-iot-hardware",
        name: "EMAQ Field Controller",
        role: "Embedded Hardware Relay",
        technology: "EMAQ Automation Microcontroller",
        purpose: "Actuate physical contactors, read sensor voltages, and dispatch cryptographic ACK receipt.",
        relevantProject: "Peepul Agri IoT Platform",
        engineeringConsiderations: "Hardware-level interlocking prevents conflicting commands from burning out agricultural pump motors.",
        iconName: "cpu",
      },
    ],
    flowDescription: [
      "Operator command is written to local persistent SQLite buffer before dispatch.",
      "MQTT payload is transmitted with QoS 1 acknowledgment requirement.",
      "Hardware returns cryptographic ACK; buffer marks task confirmed and syncs UI state.",
    ],
  },
  {
    id: "arch-cloud-schedulers",
    title: "Cloud Infrastructure & Fault-Tolerant Async Schedulers",
    tagline: "Automated cron modules, asynchronous aggregations, and AWS infrastructure.",
    badge: "Cloud & Automation",
    description:
      "Enterprise hosting blueprint leveraging AWS EC2, S3, and RDS combined with Node.js cron workers and CI/CD staging automation.",
    nodes: [
      {
        id: "node-cloud-cicd",
        name: "CI/CD Staging Workflows",
        role: "Automated Pipelines",
        technology: "GitHub Actions • GitLab CI",
        purpose: "Lint, test, package Docker artifacts, and automatically deploy to staging environments.",
        relevantProject: "Fugen Webtech Engineering",
        engineeringConsiderations: "Automated staging deployment guarantees code matches production specifications before merge.",
        iconName: "shield",
      },
      {
        id: "node-cloud-cron",
        name: "Node.js Cron & Schedulers",
        role: "Async Background Workers",
        technology: "Node.js Cron • Task Queues",
        purpose: "Execute high-frequency data aggregations, scheduled reports, and batch push notification jobs.",
        relevantProject: "Fugen Webtech Enterprise Suite",
        engineeringConsiderations: "Isolated memory footprint and try-catch crash barriers prevent background failures from cascading to API endpoints.",
        iconName: "clock",
      },
      {
        id: "node-cloud-compute",
        name: "AWS EC2 Service",
        role: "Cloud Compute Layer",
        technology: "AWS EC2 • Linux • Nginx Reverse Proxy",
        purpose: "Host production microservices with SSL termination and process supervision.",
        relevantProject: "Enterprise Production Systems",
        engineeringConsiderations: "Hardened security groups and isolated VPC subnets protecting application processes.",
        iconName: "cloud",
      },
      {
        id: "node-cloud-storage",
        name: "AWS S3 & Managed RDS",
        role: "Persistent Cloud Store",
        technology: "AWS S3 • AWS RDS PostgreSQL",
        purpose: "Secure object storage for media assets and automated daily multi-AZ database backups.",
        relevantProject: "Enterprise & Freelance Deployments",
        engineeringConsiderations: "IAM role least-privilege scoping and automated point-in-time recovery.",
        iconName: "database",
      },
    ],
    flowDescription: [
      "Code merges trigger GitHub Actions CI/CD tests and staging deploys.",
      "Background cron tasks query and aggregate data without locking user-facing tables.",
      "Media assets offload securely to AWS S3; stateful transactions persist in AWS RDS.",
    ],
  },
];
