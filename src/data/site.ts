/**
 * Single source of truth for every word and number on this site.
 *
 * Nothing here is fetched at runtime -- edit this file, save, done.
 * `icon` fields are string keys resolved by src/lib/icons.ts, which keeps
 * this module free of React imports so it stays serialisable and testable.
 */

import type { IconName } from "@/lib/icons";

export const site = {
  name: "Slipstream",
  tagline: "Product analytics that answers, not just charts",
  description:
    "Slipstream unifies product, billing, and support data into one timeline so your team can see why customers churn -- and act before they do.",
  url: "https://slipstream.example.com",
  email: "hello@slipstream.example.com",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "New: Retention Signals, now in every plan",
  eyebrowHref: "#features",
  headline: "Stop guessing why customers leave.",
  headlineAccent: "Start seeing it.",
  subhead:
    "Slipstream stitches product events, billing, and support tickets into one customer timeline -- so the reason behind every churn is one click away, not one quarter later.",
  primaryCta: { label: "Start free trial", href: "#pricing" },
  secondaryCta: { label: "Book a 20-min demo", href: "#cta" },
  disclaimer: "Free for 14 days. No credit card. Cancel in one click.",
  stats: [
    { value: "31%", label: "average churn reduction in 90 days" },
    { value: "4.2M", label: "customer events processed daily" },
    { value: "< 5 min", label: "from signup to first insight" },
  ],
} as const;

export const logos: { name: string; wordmark: string }[] = [
  { name: "Northwind Labs", wordmark: "NORTHWIND" },
  { name: "Corvus", wordmark: "corvus" },
  { name: "Palette", wordmark: "Palette" },
  { name: "Ironclad Systems", wordmark: "IRONCLAD" },
  { name: "Meridian", wordmark: "Meridian" },
  { name: "Fernway", wordmark: "fernway" },
];

export const valueProp: {
  eyebrow: string;
  headline: string;
  body: string;
  points: {
    icon: IconName;
    title: string;
    body: string;
    tone: "problem" | "solution";
  }[];
} = {
  eyebrow: "The problem",
  headline: "Your data is complete. Your picture is not.",
  body: "Product events live in one tool, invoices in another, and the support thread that actually explains the cancellation lives in a fourth. By the time someone joins the dots, the renewal has already passed.",
  points: [
    {
      icon: "Unplug",
      title: "Before Slipstream",
      body: "Four dashboards, one CSV export, and a Monday morning spent reconciling user IDs by hand.",
      tone: "problem",
    },
    {
      icon: "Waypoints",
      title: "After Slipstream",
      body: "One timeline per customer. Every event, invoice, and ticket in order, with the churn risk score updating live.",
      tone: "solution",
    },
  ],
};

export const features: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "Waypoints",
    title: "Unified customer timeline",
    body: "Product events, invoices, emails, and tickets merged into a single chronological view, deduplicated across sources by identity resolution.",
  },
  {
    icon: "TrendingDown",
    title: "Retention signals",
    body: "A live churn-risk score per account, built from usage decay, support sentiment, and payment health. Sorted so your CSMs work the right list first.",
  },
  {
    icon: "Zap",
    title: "Sub-second queries",
    body: "A columnar event store tuned for funnels and cohorts. Ninety-day retention grids return in under 400ms, even at nine figures of events.",
  },
  {
    icon: "Plug",
    title: "Forty-plus integrations",
    body: "Stripe, Segment, Zendesk, HubSpot, Snowflake, and the rest. Connect with OAuth in a couple of minutes, no engineering ticket required.",
  },
  {
    icon: "ShieldCheck",
    title: "SOC 2 Type II",
    body: "Audited annually, with field-level PII redaction, customer-managed encryption keys, and EU or US data residency you choose at signup.",
  },
  {
    icon: "Bell",
    title: "Alerts that reach people",
    body: "Route any signal to Slack, email, or a webhook. Threshold, anomaly, and cohort-drift alerts, with digest batching so nobody mutes the channel.",
  },
];

export const steps: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "Plug",
    title: "Connect your sources",
    body: "Authorise Stripe and your product analytics with OAuth. Slipstream backfills the last 12 months automatically.",
  },
  {
    icon: "Waypoints",
    title: "We resolve identities",
    body: "Anonymous sessions, user IDs, and billing accounts get merged into one entity. No mapping spreadsheet needed.",
  },
  {
    icon: "Sparkles",
    title: "Act on the signal",
    body: "Open the at-risk list on day one. Route it to Slack, assign owners, and watch the score move as you intervene.",
  },
];

export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}[] = [
  {
    quote:
      "We cut logo churn from 4.1% to 2.6% in a single quarter. The difference was not a new playbook, it was finally knowing which twenty accounts to call on Monday.",
    name: "Priya Raghunathan",
    role: "VP Customer Success",
    company: "Northwind Labs",
    initials: "PR",
  },
  {
    quote:
      "Our analysts were spending two days a month reconciling Stripe against Segment. That work is simply gone now, and the numbers actually agree.",
    name: "Marcus Oyelaran",
    role: "Head of Data",
    company: "Corvus",
    initials: "MO",
  },
  {
    quote:
      "The onboarding claim is real. We connected two sources before standup and had a working at-risk list by lunch.",
    name: "Hana Lindqvist",
    role: "Director of Growth",
    company: "Meridian",
    initials: "HL",
  },
];

export type BillingCycle = "monthly" | "annual";

export const pricing: {
  note: string;
  annualDiscountLabel: string;
  plans: {
    id: string;
    name: string;
    blurb: string;
    price: Record<BillingCycle, number | null>;
    priceSuffix: string;
    cta: { label: string; href: string };
    featured: boolean;
    features: string[];
  }[];
} = {
  note: "All plans include unlimited seats, every integration, and SOC 2 reporting. Priced on tracked monthly active users.",
  annualDiscountLabel: "Save 20%",
  plans: [
    {
      id: "starter",
      name: "Starter",
      blurb: "For teams proving the case, up to 10k monthly active users.",
      price: { monthly: 49, annual: 39 },
      priceSuffix: "/month",
      cta: { label: "Start free trial", href: "#cta" },
      featured: false,
      features: [
        "Up to 10,000 tracked MAU",
        "Unified customer timeline",
        "6 integrations",
        "90-day event history",
        "Email support",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      blurb: "For teams acting on retention every week, up to 100k MAU.",
      price: { monthly: 199, annual: 159 },
      priceSuffix: "/month",
      cta: { label: "Start free trial", href: "#cta" },
      featured: true,
      features: [
        "Up to 100,000 tracked MAU",
        "Retention signals and risk scoring",
        "All 40+ integrations",
        "Unlimited event history",
        "Slack and webhook alerts",
        "Priority support, 4-hour response",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      blurb: "For regulated teams with residency and procurement requirements.",
      price: { monthly: null, annual: null },
      priceSuffix: "",
      cta: { label: "Talk to sales", href: "#cta" },
      featured: false,
      features: [
        "Unlimited MAU",
        "EU or US data residency",
        "Customer-managed encryption keys",
        "SSO, SCIM, and audit logs",
        "Named CSM and 99.9% uptime SLA",
      ],
    },
  ],
};

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How long does setup actually take?",
    answer:
      "Connecting your first two sources takes about five minutes over OAuth. Backfilling 12 months of history runs in the background and finishes within a few hours for most accounts, and you can start exploring live data immediately.",
  },
  {
    question: "Do we need an engineer to install it?",
    answer:
      "Not for the supported integrations. Stripe, Segment, Zendesk, HubSpot, and the rest connect with an admin login. You only need engineering if you want to send custom events through our API or SDKs.",
  },
  {
    question: "What happens to our data if we leave?",
    answer:
      "You can export everything as CSV or Parquet at any time, and we run a full deletion within 30 days of cancellation. There is no export fee and no lock-in period on monthly plans.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "By tracked monthly active users, not by seat and not by event volume. Invite the whole company at no extra cost. If you cross a tier mid-month we prorate rather than cutting off ingestion.",
  },
  {
    question: "Is our customer data used to train models?",
    answer:
      "No. Customer data is never used to train shared or third-party models. Risk scoring is fitted per-tenant on your own data and stays inside your tenancy.",
  },
  {
    question: "Can we keep data in the EU?",
    answer:
      "Yes, on Enterprise. You choose EU or US residency at signup and it applies to storage, processing, and backups. Sub-processors are listed in our trust centre and change with 30 days of notice.",
  },
];

export const finalCta = {
  headline: "See your first at-risk account today",
  body: "Connect a source and get a live retention picture in under five minutes. Fourteen days free, no card, and a real human on the other end if you get stuck.",
  primaryCta: { label: "Start free trial", href: "#" },
  secondaryCta: { label: "Book a 20-min demo", href: "#" },
  assurances: ["No credit card required", "Cancel in one click", "SOC 2 Type II"],
} as const;

export const footer: {
  columns: { title: string; links: { label: string; href: string }[] }[];
  socials: { label: string; href: string; icon: IconName }[];
  legal: { label: string; href: string }[];
} = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#features" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Customers", href: "#testimonials" },
        { label: "Contact", href: "#cta" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API reference", href: "#" },
        { label: "Trust centre", href: "#" },
        { label: "Status", href: "#" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
  socials: [
    { label: "Slipstream on X", href: "#", icon: "Twitter" },
    { label: "Slipstream on LinkedIn", href: "#", icon: "Linkedin" },
    { label: "Slipstream on GitHub", href: "#", icon: "Github" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};
