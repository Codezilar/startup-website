import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  Cpu,
  DatabaseZap,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";

export const partners = ["Logoipsum", "logo Ipsum", "Logoipsum", "LNIIT", "Logoipsum"];

export const features = [
  {
    title: "High-Accuracy Data Processing",
    copy: "Optimized to analyze large-scale data with speed and precision.",
    metric: "90%",
    label: "Model Accuracy",
    active: true,
    icon: DatabaseZap
  },
  {
    title: "Secure & Reliable AI Infrastructure",
    copy: "Built with enterprise-grade security and continuous uptime.",
    metric: "99.9%",
    label: "System Reliability",
    active: false,
    icon: ShieldCheck
  },
  {
    title: "Real-Time Analytics",
    copy: "Live intelligence streams make critical decisions easier to act on.",
    metric: "2.4s",
    label: "Insight Latency",
    active: false,
    icon: BarChart3
  },
  {
    title: "Intelligent Automation",
    copy: "Automate repetitive workflows while preserving full operator control.",
    metric: "74%",
    label: "Task Reduction",
    active: false,
    icon: Workflow
  },
  {
    title: "Predictive Insights",
    copy: "Forecast market, product, and customer patterns before they surface.",
    metric: "8.7x",
    label: "Signal Lift",
    active: false,
    icon: BrainCircuit
  },
  {
    title: "API Integrations",
    copy: "Connect models, data sources, and internal tools through one layer.",
    metric: "120+",
    label: "Connectors",
    active: false,
    icon: Network
  }
];

export const innovation = [
  { title: "Product Enhancement", icon: Layers3, code: "02/24" },
  { title: "Community Growth", icon: UsersRound, code: "03/24" },
  { title: "Global Partnerships", icon: Globe2, code: "04/24" },
  { title: "Market Expansion", icon: Rocket, code: "05/24" }
];

export const pricing = [
  {
    name: "Pay-as-you-go",
    subtitle: "Build your system with AI capabilities",
    price: "$99",
    suffix: "/ per month",
    features: ["Real-time AI processing", "API access", "Semantic indexing", "Usage-based billing"],
    recommended: false
  },
  {
    name: "Pro AI Subscription",
    subtitle: "For growing teams building AI products",
    price: "$199",
    suffix: "/ per month",
    features: ["Advanced AI models", "Priority processing", "Performance analytics", "24/7 system monitoring"],
    recommended: true
  },
  {
    name: "Enterprise AI Solutions",
    subtitle: "Custom AI for large organizations",
    price: "$399",
    suffix: "/ per month",
    features: ["Dedicated architecture", "Private-model training", "Enterprise-grade security", "Technical account support"],
    recommended: false
  }
];

export const testimonials = [
  {
    quote:
      "Implementing this AI platform transformed how our analytics team makes decisions.",
    name: "Alex Morgan",
    role: "VP Product",
    company: "Nexa Studio",
    rating: 5
  },
  {
    quote:
      "The capabilities and accuracy helped us grow faster without increasing operational drag.",
    name: "Sarah Lee",
    role: "Founder",
    company: "BrightLayer",
    rating: 5
  },
  {
    quote:
      "Reliable, secure, and incredibly responsive during our enterprise rollout.",
    name: "Daniel Cross",
    role: "CTO",
    company: "Northstar AI",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Is this AI platform suitable for startups?",
    answer:
      "Yes. Our AI dashboard is designed to scale from early-stage startups to high-volume enterprise systems."
  },
  {
    question: "How secure is my data?",
    answer:
      "Data is protected with encryption, role-based access, isolated environments, and continuous infrastructure monitoring."
  },
  {
    question: "Can I integrate this AI with my existing system?",
    answer:
      "Yes. REST APIs, webhooks, SDK-ready patterns, and connector workflows make integration straightforward."
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Every plan includes support, with priority engineering assistance and success planning on Pro and Enterprise tiers."
  }
];

export const footerLinks = {
  Product: ["AI Platform", "Features", "Solutions", "Integrations", "Pricing"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"]
};

export const navItems = ["Home", "About", "How it Works", "Resources", "Plans"];

export const statIcons = [Bot, Cpu, Activity, Check, LockKeyhole, Boxes, ArrowUpRight, Sparkles];
