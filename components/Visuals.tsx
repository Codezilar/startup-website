"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Bot, Cpu, Gauge, LineChart, Zap } from "lucide-react";

export function RobotVisual() {
  return (
    <div className="robot-wrap" aria-label="AI humanoid robot visual">
      <div className="robot-glow" />
      <div className="robot-head">
        <span className="robot-highlight" />
        <span className="robot-visor" />
        <span className="robot-ear" />
      </div>
      <div className="robot-neck" />
      <div className="robot-shoulder" />
      <motion.div
        className="float-card hero-code"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu size={15} />
        <span>0.06s</span>
        <small>AI system speed</small>
      </motion.div>
      <motion.div
        className="float-card hero-graph"
        animate={{ y: [7, -7, 7] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Code Network & Infrastructure</span>
        <div className="sparkline" />
      </motion.div>
    </div>
  );
}

export function ImagePanel({ variant = "lab" }: { variant?: "lab" | "work" | "wide" }) {
  return (
    <div className={`image-panel image-${variant}`}>
      <div className="image-noise" />
      <div className="human-figure">
        <span />
        <i />
      </div>
      <div className="scan-line" />
    </div>
  );
}

export function MiniMetric({ value, label, icon: Icon = Activity }: { value: string; label: string; icon?: typeof Activity }) {
  return (
    <div className="mini-metric">
      <Icon size={13} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function DashboardBars({ active = false }: { active?: boolean }) {
  const bars = [62, 78, 92, 66, 88, 71, 96, 58, 83, 73];

  return (
    <div className="bars" aria-hidden="true">
      {bars.map((height, index) => (
        <motion.span
          key={height + index}
          className={active ? "active" : ""}
          initial={{ height: 10 }}
          whileInView={{ height }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: index * 0.04 }}
        />
      ))}
    </div>
  );
}

export function AnalyticsCard() {
  return (
    <div className="analytics-card">
      <div>
        <span className="avatar-stack">
          <i />
          <i />
          <i />
          <i />
        </span>
        <small>Trusted by Innovative Teams</small>
      </div>
      <h3>Intelligent Design. Automated Systems. Real Business Impact.</h3>
    </div>
  );
}

export function MetricPill() {
  return (
    <div className="metric-pill">
      <LineChart size={17} />
      <div>
        <strong>300+</strong>
        <span>AI Models Deployed</span>
      </div>
      <div>
        <strong>3.7M+</strong>
        <span>Data Points</span>
      </div>
      <div>
        <strong>99%</strong>
        <span>Accuracy</span>
      </div>
    </div>
  );
}

export function PerformanceArrow() {
  return (
    <motion.a
      href="#pricing"
      className="round-arrow"
      whileHover={{ scale: 1.07, rotate: -10 }}
      whileTap={{ scale: 0.95 }}
      aria-label="View pricing"
    >
      <Zap size={22} />
    </motion.a>
  );
}

export function TinyStats() {
  return (
    <div className="tiny-stats">
      <MiniMetric value="8.1x" label="AI gain" icon={Gauge} />
      <MiniMetric value="98.2%" label="Model quality" icon={BarChart3} />
      <MiniMetric value="24/7" label="Automation" icon={Bot} />
    </div>
  );
}
