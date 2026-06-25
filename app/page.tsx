"use client";

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Facebook,
  Github,
  Instagram,
  Menu,
  Minus,
  Plus,
  Star
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  faqs,
  features,
  footerLinks,
  innovation,
  navItems,
  partners,
  pricing,
  testimonials
} from "@/data/site";
import { fadeUp, MotionArticle, MotionDiv, MotionSection, stagger } from "@/components/Motion";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import {
  AnalyticsCard,
  DashboardBars,
  ImagePanel,
  MetricPill,
  MiniMetric,
  PerformanceArrow,
  RobotVisual,
  TinyStats
} from "@/components/Visuals";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main>
      <div className="page-shell">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#" className="brand" aria-label="Bermard home">
            <span>BM</span>
            <strong>Bermard</strong>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
          <Button className="nav-cta">Get Started</Button>
          <button className="menu-btn" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </nav>

        <MotionSection
          className="hero grid-bg"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <MotionDiv className="hero-copy" variants={fadeUp}>
            <Eyebrow>Powering AI For Products With UI</Eyebrow>
            <h1>Build Smarter Products With Intelligence</h1>
            <p>
              Unlock intelligent workflows, predictive insights, and secure AI decision systems
              built for modern product teams.
            </p>
            <div className="hero-actions">
              <Button>Get Started With AI</Button>
              <a className="link-cta" href="#features">
                View features <ChevronDown size={13} />
              </a>
            </div>
          </MotionDiv>
          <MotionDiv className="hero-visual" variants={fadeUp}>
            <RobotVisual />
          </MotionDiv>
          <MotionDiv className="hero-bottom" variants={fadeUp}>
            <AnalyticsCard />
            <MetricPill />
          </MotionDiv>
        </MotionSection>

        <MotionSection className="partners" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <MotionDiv variants={fadeUp}>
            <p>Your Trusted Legal Partner</p>
            <div className="logo-cloud">
              {partners.map((logo, index) => (
                <motion.span key={`${logo}-${index}`} whileHover={{ y: -4, color: "#fff" }}>
                  {logo}
                </motion.span>
              ))}
            </div>
          </MotionDiv>
        </MotionSection>

        <MotionSection
          className="section tech"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="About Our AI Platform"
              title="The Core Of Intelligent AI-Driven Technology"
              side="Building AI That Works for People"
            />
          </MotionDiv>
          <div className="tech-grid">
            <MotionDiv className="tech-left" variants={fadeUp}>
              <ImagePanel />
              <ImagePanel variant="work" />
            </MotionDiv>
            <MotionDiv className="tech-right" variants={fadeUp}>
              <div className="stat-row">
                <MiniMetric value="1.7M+" label="Actions Automated" />
                <MiniMetric value="200+" label="AI Products Shipped" />
              </div>
              <div className="testimonial-card">
                <span className="avatar-stack small">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <p>
                  Trusted by startups, AI operators, and innovation teams for autonomous
                  workflows, infrastructure resilience, and secure decision intelligence.
                </p>
                <Button>Start Building With AI</Button>
              </div>
            </MotionDiv>
          </div>
        </MotionSection>

        <MotionSection
          id="features"
          className="section features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv className="center-head" variants={fadeUp}>
            <Eyebrow>Our AI Capabilities</Eyebrow>
            <h2>Powerful AI Features for Real-World Use</h2>
            <p>
              Designed to adapt, learn, and perform, our AI systems deliver reliability,
              accuracy, and performance across every use case.
            </p>
          </MotionDiv>
          <div className="feature-grid">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <MotionArticle
                  className={`feature-card ${feature.active ? "is-active" : ""}`}
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                >
                  <FeatureIcon size={19} />
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                  <div className="feature-bottom">
                    <DashboardBars active={feature.active} />
                    <div>
                      <small>{feature.label}</small>
                      <strong>{feature.metric}</strong>
                    </div>
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection
          className="section transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="Our Process"
              title="How Our AI Transforms Ideas Into Intelligence"
              side="Creating AI Solutions That Truly Work"
            />
          </MotionDiv>
          <MotionDiv className="wide-showcase" variants={fadeUp}>
            <ImagePanel variant="wide" />
            <TinyStats />
            <PerformanceArrow />
          </MotionDiv>
        </MotionSection>

        <MotionSection
          className="section innovation"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="Our Approach"
              title="Driving Innovation Through Artificial Intelligence"
              side="Technology Built for Real Growth"
            />
          </MotionDiv>
          <div className="innovation-grid">
            {innovation.map((item) => {
              const InnovationIcon = item.icon;

              return (
                <MotionArticle className="innovation-card" key={item.title} variants={fadeUp} whileHover={{ y: -7 }}>
                  <InnovationIcon size={23} />
                  <ArrowUpRight size={15} className="corner-icon" />
                  <h3>{item.title}</h3>
                  <span>{item.code}</span>
                </MotionArticle>
              );
            })}
            <MotionDiv className="innovation-image" variants={fadeUp}>
              <ImagePanel variant="work" />
              <PerformanceArrow />
            </MotionDiv>
          </div>
        </MotionSection>

        <MotionSection
          id="pricing"
          className="section pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="Our Pricing"
              title="Flexible AI Pricing For Every Stage"
              side="Scale Smarter With Confidence"
            />
          </MotionDiv>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <MotionArticle
                className={`price-card ${plan.recommended ? "recommended" : ""}`}
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -9 }}
              >
                <h3>{plan.name}</h3>
                <p>{plan.subtitle}</p>
                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.suffix}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={13} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button>Start Now</Button>
              </MotionArticle>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          className="section testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="What Our Users Say"
              title="Trusted By Teams Worldwide"
              side="Real Results from Real Users"
            />
          </MotionDiv>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <MotionArticle
                className={`review-card ${activeTestimonial === index ? "active" : ""}`}
                key={item.name}
                variants={fadeUp}
                onMouseEnter={() => setActiveTestimonial(index)}
                onFocus={() => setActiveTestimonial(index)}
                tabIndex={0}
              >
                <div className="stars">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={12} fill="currentColor" />
                  ))}
                </div>
                <p>"{item.quote}"</p>
                <div>
                  <span>{item.name}</span>
                  <small>{item.role} / {item.company}</small>
                </div>
              </MotionArticle>
            ))}
          </div>
          <div className="carousel-dots" aria-label="Testimonial carousel">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                aria-label={`Show testimonial ${index + 1}`}
                className={activeTestimonial === index ? "active" : ""}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </MotionSection>

        <MotionSection
          className="section faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <MotionDiv variants={fadeUp}>
            <SectionHeading
              eyebrow="Answers / Asked Questions"
              title="Common Questions, Clear Answers"
            />
          </MotionDiv>
          <MotionDiv className="faq-list" variants={fadeUp}>
            {faqs.map((item, index) => (
              <div className="faq-item" key={item.question}>
                <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                  <span>{item.question}</span>
                  {activeFaq === index ? <Minus size={14} /> : <Plus size={14} />}
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </MotionDiv>
        </MotionSection>

        <footer className="footer">
          <div className="footer-media">
            <ImagePanel />
            <ImagePanel variant="work" />
            <span>Follow Us</span>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" aria-label="Github">
                <Github size={14} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={14} />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <h3>{heading}</h3>
              {links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-brand">
            <a href="#" className="brand">
              <span>BM</span>
              <strong>Bermard</strong>
            </a>
            <p>
              Build an intelligent system that helps businesses grow, automate, and
              innovate through artificial intelligence.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="copyright">Copyright © 2026 Logoipsum. All Rights Reserved</div>
        </footer>
      </div>
    </main>
  );
}
