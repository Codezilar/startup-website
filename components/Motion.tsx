"use client";

import { motion, type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
};

export const MotionSection = motion.section;
export const MotionDiv = motion.div;
export const MotionArticle = motion.article;
