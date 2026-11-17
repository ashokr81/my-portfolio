export interface Metric {
  id: string;
  /** numeric part animated by the counter */
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  category: 'Payments' | 'Scale' | 'Performance' | 'Experience';
  context: string;
  sourceCompany: string;
  detail: string;
  highlightColor?: string;
}

export const verifiedMetrics: Metric[] = [
  {
    id: 'play-apps',
    value: 6,
    label: 'Live Apps on Google Play',
    category: 'Scale',
    sourceCompany: 'Enterprise & Freelance',
    context: 'Built and deployed by me, from backend to Play Store release',
    detail:
      'CivilBook Provider, Civilbook (User), Kingresearch Academy, Grow Together Farmily, Expenza and Habitor are all live on Google Play.',
    highlightColor: 'text-cyan-400',
  },
  {
    id: 'downloads',
    value: 200,
    suffix: 'K+',
    label: 'Total Installs Across My Apps',
    category: 'Scale',
    sourceCompany: 'Google Play',
    context: '2 lakh+ installs, led by CivilBook Provider and Civilbook',
    detail: 'Total installs across CivilBook Provider, Civilbook, Kingresearch Academy, Grow Together Farmily, Expenza and Habitor.',
    highlightColor: 'text-amber-400',
  },
  {
    id: 'gateways',
    value: 2,
    label: 'Payment Gateways in Production',
    category: 'Payments',
    sourceCompany: 'Stripe & Razorpay',
    context: 'Integrated in almost every app I have shipped',
    detail:
      'Stripe and Razorpay checkout, server-side order creation, webhook signature verification, failure handling and refunds.',
    highlightColor: 'text-emerald-400',
  },
  {
    id: 'latency',
    value: 40,
    suffix: '%',
    label: 'Faster Primary API Responses',
    category: 'Performance',
    sourceCompany: 'Fugen Webtech',
    context: 'Heavy jobs moved to BullMQ + Redis queues',
    detail: 'AI embedding generation, batch notifications and invoice generation decoupled from request paths with BullMQ job queues.',
    highlightColor: 'text-sky-400',
  },
  {
    id: 'dispatch',
    value: 30,
    suffix: '%',
    label: 'Lower Event Dispatch Latency',
    category: 'Performance',
    sourceCompany: 'Orotron',
    context: 'Socket.io streaming engines at 99.9% uptime',
    detail: 'High-throughput Socket.io and streaming broker ingestion engines during peak market volume hours.',
    highlightColor: 'text-indigo-400',
  },
  {
    id: 'query-load',
    value: 45,
    suffix: '%',
    label: 'Less Repeated Query Load',
    category: 'Performance',
    sourceCompany: 'Orotron',
    context: 'Redis caching over PostgreSQL & MongoDB',
    detail: 'Redis caching layer over normalized PostgreSQL schemas and MongoDB collections.',
    highlightColor: 'text-violet-400',
  },
  {
    id: 'experience',
    value: 3.5,
    decimals: 1,
    suffix: '+',
    label: 'Years Professional Experience',
    category: 'Experience',
    sourceCompany: 'Fugen Webtech & Orotron',
    context: 'Plus freelance work since 2020',
    detail: 'Senior Full Stack Developer at Fugen Webtech and Backend & Full Stack Developer at Orotron.',
    highlightColor: 'text-blue-400',
  },
  {
    id: 'uptime',
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Uptime at Peak Market Hours',
    category: 'Performance',
    sourceCompany: 'Orotron',
    context: 'Real-time analytics backend',
    detail: 'Streaming backend for Kingresearch Academy kept 99.9% uptime during peak market volume.',
    highlightColor: 'text-rose-400',
  },
];
