export interface Gateway {
  name: string;
  tagline: string;
  usedIn: string[];
  capabilities: string[];
  color: string;
}

export interface LifecycleStep {
  id: string;
  event: string;
  title: string;
  owner: 'Client' | 'Server' | 'Gateway' | 'Database';
  detail: string;
}

export const gateways: Gateway[] = [
  {
    name: 'Stripe',
    tagline: 'Payment Intents, SDK checkout and signed webhooks',
    usedIn: ['CivilBook Provider', 'Civilbook (User)', 'Civilbook Admin CRM'],
    capabilities: ['Payment Intents', 'Mobile SDK checkout', 'Webhook signatures', 'Refunds API'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    name: 'Razorpay',
    tagline: 'Orders API, checkout and HMAC signature verification',
    usedIn: ['CivilBook Provider', 'Civilbook (User)', 'Kingresearch Academy'],
    capabilities: ['Orders API', 'Checkout SDK', 'HMAC verification', 'Subscriptions'],
    color: 'from-sky-500 to-cyan-400',
  },
];

export const lifecycle: LifecycleStep[] = [
  {
    id: 'create',
    event: 'order.created',
    title: 'Create order on server',
    owner: 'Server',
    detail: 'Amount, currency and idempotency key are set by the backend. The client never decides the price.',
  },
  {
    id: 'checkout',
    event: 'checkout.opened',
    title: 'Checkout in app',
    owner: 'Client',
    detail: 'Stripe or Razorpay SDK collects card / UPI details. Card data never touches our servers.',
  },
  {
    id: 'authorize',
    event: 'payment.authorized',
    title: 'Gateway authorizes',
    owner: 'Gateway',
    detail: 'The provider authorizes the payment and emits a signed webhook to the backend.',
  },
  {
    id: 'verify',
    event: 'webhook.verified',
    title: 'Verify signature',
    owner: 'Server',
    detail: 'HMAC / Stripe signature checked. Duplicate webhooks are ignored idempotently, with retries on failure.',
  },
  {
    id: 'capture',
    event: 'payment.captured',
    title: 'Record & capture',
    owner: 'Database',
    detail: 'Transaction written to PostgreSQL inside a DB transaction, booking and commission updated together.',
  },
  {
    id: 'notify',
    event: 'user.notified',
    title: 'Notify & reconcile',
    owner: 'Server',
    detail: 'User, provider and admin CRM updated in real time. Records stay consistent for reconciliation and refunds.',
  },
];

export const paymentPractices = [
  { title: 'Server-trusted amounts', detail: 'Orders and intents are created server-side only.' },
  { title: 'Signature verification', detail: 'Every webhook is verified before state changes.' },
  { title: 'Idempotent webhooks', detail: 'Replays and duplicates never double-charge or double-credit.' },
  { title: 'Failure handling', detail: 'Failed payments marked clearly, users can retry safely.' },
  { title: 'Refunds', detail: 'Refunds issued through the provider API and synced to records.' },
  { title: 'No raw card data', detail: 'Card details stay with Stripe / Razorpay. Secrets in env config.' },
  { title: 'Audit trail', detail: 'RBAC-protected financial records with audit logs in the admin CRM.' },
  { title: 'Async jobs', detail: 'Invoices and notifications run on BullMQ + Redis queues.' },
];
