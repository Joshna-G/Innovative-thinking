"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fw-bold"
      >
        Welcome to Our Love Story
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A special private place for all our moments.
      </motion.p>
    </div>
  );
}
