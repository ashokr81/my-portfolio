export interface ArchitectureStep {
  name: string;
  role: string;
  detail: string;
  badge: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "Marketplace Platform" | "Real-Time Analytics" | "Agricultural IoT Platform";
  tagline: string;
  overview: string;
  classification: "Enterprise Production System" | "Mission-Critical Platform";
  technologies: string[];
  subsystems: {
    name: string;
    tech: string;
    description: string;
  }[];
  technicalPillars: {
    title: string;
    points: string[];
  }[];
  architectureFlow: ArchitectureStep[];
  engineeringChallenges: {
    challenge: string;
    solution: string;
    outcome: string;
  }[];
}

export const featuredProjects: ProjectCaseStudy[] = [
  {
    id: "civilbook",
    title: "CIVILBOOK",
    category: "Marketplace Platform",
    tagline: "Synchronized dual-client marketplace ecosystem with real-time peer communication and geo-radius filtering.",
    overview:
      "A comprehensive multi-tiered marketplace platform composed of dedicated consumer (User) and service companion (Provider) mobile applications, an operational React administrative command center, and a high-concurrency Node.js/Express backend anchored on PostgreSQL.",
    classification: "Enterprise Production System",
    technologies: [
      "Flutter",
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebRTC",
      "Firebase",
      "Google Maps API",
      "WebSockets",
      "Stripe",
      "Razorpay",
    ],
    subsystems: [
      {
        name: "User Mobile Application",
        tech: "Flutter (Dart)",
        description: "Consumer app for service discovery, real-time provider matching, live radius tracking, and instantaneous voice/chat sessions.",
      },
      {
        name: "Provider Companion Application",
        tech: "Flutter (Dart)",
        description: "Dedicated contractor companion app with background location beaconing, job dispatch notifications, and peer communication channels.",
      },
      {
        name: "Administrative Operations Center",
        tech: "React.js • TypeScript",
        description: "Full-scale administrative dashboard monitoring platform transactions, dispute resolution, user verification, and geo-density analytics.",
      },
      {
        name: "Core Backend & Real-Time Engine",
        tech: "Node.js • Express • PostgreSQL • WebSockets",
        description: "High-throughput API layer orchestrating geographic bounding queries, relational transactions, session security, and stateful streaming.",
      },
    ],
    technicalPillars: [
      {
        title: "Streaming & Voice Calling Infrastructure",
        points: [
          "Engineered resilient WebRTC sound streams and WebSocket channels to provide instantaneous peer-to-peer audio calls without intermediate media server transcoding latency.",
          "Implemented stateful signaling mechanisms via WebSockets with automatic reconnection fallbacks when traversing network NATs.",
          "Engineered peer-to-peer data channels for low-latency in-app chat, media exchange, and live status dispatch.",
        ],
      },
      {
        title: "Dynamic Location Mechanics & Geo-Radius Engine",
        points: [
          "Implemented reactive Google Maps geometric radius filtering dynamically scoping available providers within a configurable 30–60 km radius.",
          "Architected asynchronous background location streaming in Flutter, balancing precise geo-coordinate telemetry with mobile battery preservation.",
          "Optimized PostgreSQL spatial queries to prevent full-table scans during high-frequency provider proximity lookups.",
        ],
      },
      {
        title: "Stripe & Razorpay Payment Integration",
        points: [
          "Integrated Stripe and Razorpay in both the User and Provider apps: bookings, service payments and provider subscription plans.",
          "Orders and payment intents created server-side only; payments confirmed through verified webhook signatures, never from the client.",
          "Idempotent webhook processing, failure handling with safe retries, and transaction records kept consistent in PostgreSQL for commission payouts and reconciliation in the admin CRM.",
        ],
      },
      {
        title: "Multi-Platform Synchronization",
        points: [
          "Synchronized real-time job state transitions across User, Provider, and Admin dashboards using WebSocket event broadcasts.",
          "Combined Firebase real-time notifications with server-side push queues to guarantee zero missed work alerts.",
        ],
      },
    ],
    architectureFlow: [
      {
        name: "Flutter Client Apps",
        role: "User & Provider Interfaces",
        detail: "Bi-directional audio/chat UI, Google Maps polygon renders & background GPS streaming",
        badge: "Client Layer",
      },
      {
        name: "API Gateway & Router",
        role: "Node.js & Express Server",
        detail: "JWT authentication, request rate limiting, payload validation, and route dispatching",
        badge: "API Tier",
      },
      {
        name: "Geo-Spatial Relational Store",
        role: "PostgreSQL Database",
        detail: "Spatial indexing, 30–60 km radius bounding queries, and ACID transactional ledgers",
        badge: "Persistence",
      },
      {
        name: "Real-Time Signaling & P2P",
        role: "WebSockets + WebRTC",
        detail: "Direct peer-to-peer sound streams, low-latency signaling handshake, and presence broadcast",
        badge: "Real-Time",
      },
      {
        name: "Push & Cloud Services",
        role: "Firebase & Cloud Services",
        detail: "Asynchronous push dispatching, device token registration, and background wakeups",
        badge: "Infrastructure",
      },
    ],
    engineeringChallenges: [
      {
        challenge: "High-frequency background location updates draining mobile batteries and congesting the API.",
        solution: "Implemented distance-filtered velocity thresholding in Flutter background geolocator, transmitting coordinates only on significant displacement.",
        outcome: "Slashed superfluous GPS transmissions by 70% while maintaining sub-50 meter tracking accuracy across active routes.",
      },
      {
        challenge: "Maintaining zero audio delay on unstable 3G/4G cellular connections during live support calls.",
        solution: "Engineered direct P2P WebRTC audio streams with dynamic jitter buffers and adaptive Opus bitrate scaling.",
        outcome: "Sub-150ms voice latency achieved under congested network conditions.",
      },
    ],
  },
  {
    id: "kingresearch-academy",
    title: "KINGRESEARCH ACADEMY",
    category: "Real-Time Analytics",
    tagline: "Sub-second streaming financial analytics engine and live trading-board updates for active market participants.",
    overview:
      "A mission-critical financial analytics platform delivering real-time streaming market calculations, live dynamic trading board telemetry, and membership subscription tiers for active trading users.",
    classification: "Mission-Critical Platform",
    technologies: [
      "Flutter",
      "Bloc Pattern",
      "MVVM",
      "WebSockets",
      "Razorpay Payment Gateway",
      "REST APIs",
      "Dart",
    ],
    subsystems: [
      {
        name: "Mobile Trading Console",
        tech: "Flutter • Bloc Architecture",
        description: "High-density financial user interface rendering streaming candlestick ticks, live order boards, and custom market index metrics.",
      },
      {
        name: "WebSocket Ingestion Pipeline",
        tech: "Stateful WebSocket Stream",
        description: "Multiplexed streaming socket receiving high-frequency tick data with deterministic stream transformer decoders.",
      },
      {
        name: "Calculation & Aggregation Engine",
        tech: "Dart Stream Transformers • MVVM",
        description: "Local sub-second index derivations, moving averages, and volatility delta computations executing without thread blocking.",
      },
      {
        name: "Monetization & Entitlement Layer",
        tech: "Razorpay SDK • Webhooks",
        description: "Secure automated subscription lifecycle, instant webhook verification, and entitlement gating for premium market signals.",
      },
    ],
    technicalPillars: [
      {
        title: "Sub-Second WebSocket Streaming Pipeline",
        points: [
          "Developed low-latency WebSocket subscription streams ensuring real-time index calculations and live trading board updates for active users.",
          "Constructed customized backpressure buffers to prevent socket congestion during volatile market opening bells.",
          "Implemented heartbeat monitoring and immediate reconnect logic with zero user session interruption.",
        ],
      },
      {
        title: "Deterministic State Management via Bloc & MVVM",
        points: [
          "Structured pure functional state transitions using Flutter Bloc to guarantee UI render updates match exact market feed packets.",
          "Isolated high-frequency calculation logic inside background Dart Isolates to maintain an uncompromising 60 FPS frame rate.",
          "Decoupled data providers from UI widgets following strict Clean Architecture and MVVM principles.",
        ],
      },
      {
        title: "Enterprise Payment Gateway Integration",
        points: [
          "Seamlessly integrated Razorpay payment gateway handling subscription signups, one-time passes, and automated renewal webhooks.",
          "Hardened transactional security with server-side cryptographic signature validation.",
        ],
      },
    ],
    architectureFlow: [
      {
        name: "Market Feed Provider",
        role: "Financial Data Source",
        detail: "Exchange tick broadcasts, market depth feeds, and index quote streams",
        badge: "Ingestion",
      },
      {
        name: "WebSocket Bridge",
        role: "Low-Latency Channel",
        detail: "Full-duplex persistent TCP connection with heartbeat telemetry and payload compression",
        badge: "Streaming",
      },
      {
        name: "Stream Transformers",
        role: "Dart In-Memory Engine",
        detail: "Real-time index arithmetic, rolling volume metrics, and tick aggregation",
        badge: "Processing",
      },
      {
        name: "Bloc State Manager",
        role: "Deterministic State Machine",
        detail: "Thread-isolated state mutations dispatching granular UI re-renders",
        badge: "State Layer",
      },
      {
        name: "Live Trading Board UI",
        role: "Flutter 60 FPS Surface",
        detail: "High-density data matrix, instant color-coded tick flashes, and zero-stutter charts",
        badge: "Presentation",
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Intense market volatility triggering thousands of tick updates per second, causing UI stutter on mid-range Android devices.",
        solution: "Implemented an in-memory windowed throttle buffer in Dart that batches micro-ticks into 16ms render frames without discarding tick data.",
        outcome: "Maintained rock-solid 60 FPS rendering under heavy market stress with zero dropped price updates.",
      },
    ],
  },
  {
    id: "peepul-agri",
    title: "PEEPUL AGRI",
    category: "Agricultural IoT Platform",
    tagline: "Resilient low-bandwidth IoT telemetry and remote machine automation in low-signal rural environments.",
    overview:
      "An industrial agricultural automation and monitoring platform enabling farmers and agricultural operators to remotely command field hardware, monitor environmental telemetry, and guarantee machine control over erratic cellular connections.",
    classification: "Enterprise Production System",
    technologies: [
      "Flutter",
      "GetX Architecture",
      "MQTT Protocol",
      "EMAQ Systems",
      "Offline Storage",
      "Telemetry Buffers",
    ],
    subsystems: [
      {
        name: "Field Operator Mobile App",
        tech: "Flutter • GetX",
        description: "Ruggedized, high-contrast mobile dashboard designed for field conditions, providing single-tap valve/motor toggles and sensor telemetry.",
      },
      {
        name: "MQTT Edge Broker & Network",
        tech: "MQTT Protocol • QoS 1 & 2",
        description: "Lightweight pub/sub protocol communication channels specifically tuned for unstable rural GSM/2G/4G connectivity.",
      },
      {
        name: "EMAQ Hardware Control Bridge",
        tech: "EMAQ Automation Systems",
        description: "Bi-directional hardware interface translating digital commands into relay toggles, motor ignition sequences, and sensor reads.",
      },
      {
        name: "Resilient Offline Retry Buffer",
        tech: "Persistent SQLite & Local Queue",
        description: "Client-side command queue with deterministic ACK confirmation tracking, preventing duplicate actuation or missed commands.",
      },
    ],
    technicalPillars: [
      {
        title: "Low-Bandwidth Resiliency & MQTT Protocol",
        points: [
          "Implemented MQTT networks integrated with persistent retry buffers, ensuring flawless execution of remote machine controls in low-signal areas.",
          "Utilized compact binary and optimized JSON payloads to minimize data usage over intermittent cellular links.",
          "Engineered keep-alive ping cycles tuned to withstand carrier NAT timeouts without incurring unnecessary battery drain.",
        ],
      },
      {
        title: "Fail-Safe Command & ACK Verification Loop",
        points: [
          "Engineered a closed-loop ACK confirmation system: every remote machine trigger (pumps, valves, pivots) requires cryptographic hardware acknowledgment.",
          "If connectivity drops mid-transmission, commands are buffered locally with exponential backoff retries until positive receipt.",
          "Prevented accidental double-triggering of heavy electrical machinery through stateful idempotency tokens.",
        ],
      },
      {
        title: "Reactive State & Offline UX with GetX",
        points: [
          "Leveraged GetX for ultra-lightweight reactive dependency injection and immediate offline-mode UI state indication.",
          "Provided clear visual status of machine state (Confirmed / In-Transit / Cached for Retry) so operators are never left in doubt.",
        ],
      },
    ],
    architectureFlow: [
      {
        name: "Mobile Operator App",
        role: "Flutter Interface",
        detail: "Direct control switches, live moisture/pressure dials, and network status monitor",
        badge: "Edge Client",
      },
      {
        name: "Persistent Retry Buffer",
        role: "Local SQLite Queue",
        detail: "Idempotent command persistence, transaction log, and retry state machine",
        badge: "Resilience",
      },
      {
        name: "MQTT Broker Network",
        role: "Low-Bandwidth Messaging",
        detail: "QoS 1 pub/sub transport, compact payload framing, and keep-alive ping management",
        badge: "Transport",
      },
      {
        name: "EMAQ Automation Unit",
        role: "Field Hardware Microcontroller",
        detail: "Relay board actuation, motor ignition interlocks, and sensor bus queries",
        badge: "Hardware",
      },
      {
        name: "Telemetry & ACK Return",
        role: "Closed Confirmation Loop",
        detail: "Cryptographic state acknowledgment returned to mobile app clearing buffer entry",
        badge: "Feedback",
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Agricultural fields suffering from extreme cellular signal fluctuations causing dropped command packets or duplicate pump starts.",
        solution: "Designed an idempotent command sequencer with persistent SQLite queuing and QoS 1 pub/sub acknowledgment verification.",
        outcome: "Achieved 100% remote command delivery reliability with zero duplicate machine starts even during 90% packet loss intervals.",
      },
    ],
  },
];
