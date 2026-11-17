export interface PlayStoreApp {
  id: string;
  name: string;
  packageId: string;
  url: string;
  category: string;
  downloads: string;
  downloadsValue: number;
  publisher: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  payments?: string[];
  accent: 'cyan' | 'indigo' | 'emerald' | 'amber' | 'violet' | 'rose';
  featured?: boolean;
}

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const playStoreApps: PlayStoreApp[] = [
  {
    id: 'civilbook-provider',
    name: 'CivilBook Provider',
    packageId: 'com.civilbook.civilbookprovider',
    url: play('com.civilbook.civilbookprovider'),
    category: 'Business',
    downloads: '100K+',
    downloadsValue: 100000,
    publisher: 'Fugen WebTech',
    context: 'Construction marketplace · provider side',
    description:
      'Contractors, suppliers and machinery owners receive service requests and direct bookings from customers within a 30–60 km map radius.',
    highlights: [
      'Stripe & Razorpay payments, including provider subscription plans',
      'KYC document verification and booking lifecycles',
      'In-app chat with voice over WebRTC + WebSockets',
      'PostGIS radius search, 8-language UI',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'BullMQ', 'WebRTC'],
    payments: ['Stripe', 'Razorpay'],
    accent: 'cyan',
    featured: true,
  },
  {
    id: 'civilbook-user',
    name: 'Civilbook',
    packageId: 'com.civilbook.civilbookuser',
    url: play('com.civilbook.civilbookuser'),
    category: 'Business',
    downloads: '10K+',
    downloadsValue: 10000,
    publisher: 'Fugen WebTech',
    context: 'Construction marketplace · customer side',
    description: 'Customers find, book and chat with nearby construction service providers.',
    highlights: [
      'Stripe & Razorpay checkout for bookings',
      'Server-side verification with webhook status sync',
      '30 km location search with category browsing',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Google Maps API', 'WebSockets'],
    payments: ['Stripe', 'Razorpay'],
    accent: 'indigo',
    featured: true,
  },
  {
    id: 'kingresearch',
    name: 'Kingresearch Academy',
    packageId: 'com.kingresearch',
    url: play('com.kingresearch'),
    category: 'Education',
    downloads: '10K+',
    downloadsValue: 10000,
    publisher: 'Orotron',
    context: 'Finance education & live market analytics',
    description: 'Finance education app with real-time index analytics and market signals for active traders.',
    highlights: [
      'Razorpay payments for subscriptions and passes',
      'WebSocket + Redis Pub/Sub live market streams',
      '30% lower event dispatch latency, 99.9% uptime',
    ],
    stack: ['Node.js', 'MongoDB', 'Redis', 'WebSockets'],
    payments: ['Razorpay'],
    accent: 'amber',
    featured: true,
  },
  {
    id: 'farmily',
    name: 'Grow Together Farmily',
    packageId: 'com.farm.growtogetherfarmily',
    url: play('com.farm.growtogetherfarmily'),
    category: 'Productivity',
    downloads: '100+',
    downloadsValue: 100,
    publisher: 'Freelance',
    context: 'Local community marketplace',
    description:
      'One platform for local jobs, services, product sales, creative talent and village homestays, with direct contact between users.',
    highlights: ['Jobs, services and product listings', 'Homestay discovery', 'Built and shipped end to end'],
    stack: ['Full stack', 'Play Store release'],
    accent: 'emerald',
  },
  {
    id: 'expenza',
    name: 'Expenza: AI Expense Tracker',
    packageId: 'com.aiexpense.ai_expense_manager',
    url: play('com.aiexpense.ai_expense_manager'),
    category: 'Finance',
    downloads: 'New',
    downloadsValue: 0,
    publisher: 'Orbidian Technologies',
    context: 'AI personal finance',
    description: 'Expense tracking with AI-generated spending reports and a budget chat assistant.',
    highlights: [
      'AI weekly & monthly spending reports',
      'Chat assistant over budget history',
      'Category budgets with overspend alerts',
    ],
    stack: ['LLM APIs', 'Prompt engineering', 'Analytics'],
    accent: 'violet',
  },
  {
    id: 'habitor',
    name: 'Habitor: AI Health Tracker',
    packageId: 'com.healthcoach.ai_health_coach',
    url: play('com.healthcoach.ai_health_coach'),
    category: 'Health & Fitness',
    downloads: 'New',
    downloadsValue: 0,
    publisher: 'Orbidian Technologies',
    context: 'AI health coaching',
    description: 'Daily logging of calories, exercise, sleep, mood and water with personalised AI coaching.',
    highlights: [
      'AI weekly summaries & monthly trend reports',
      'Offline logging with cloud sync',
      'Encrypted health data',
    ],
    stack: ['LLM APIs', 'Offline sync', 'Charts'],
    accent: 'rose',
  },
];

export const totalDownloads = playStoreApps.reduce((sum, a) => sum + a.downloadsValue, 0);
