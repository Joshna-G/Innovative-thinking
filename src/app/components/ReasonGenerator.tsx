"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

// --- YOUR LIST OF REASONS ---
const reasons = [
  "Because you make me laugh when I want to cry.",
  "The way your eyes sparkle when you smile.",
  "Because you are my safe place.",
  "How you support my dreams no matter what.",
  "Your warm hugs that fix everything.",
  "Because you understand me without words.",
  "The way you look at me.",
  "Because you make ordinary days feel special.",
  "Your kindness to everyone around you.",
  "Because loving you is the easiest thing I've ever done."
];

export default function ReasonGenerator() {
  const [index, setIndex] = useState(0);

  const nextReason = () => {
    // Pick a random index that isn't the current one
    let newIndex = Math.floor(Math.random() * reasons.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * reasons.length);
    }
    setIndex(newIndex);
  };

  return (
    <div className="d-flex justify-content-center">
      <motion.div
        className="position-relative p-4 bg-dark border border-danger rounded-4 shadow-lg d-flex flex-column align-items-center text-center"
        style={{ width: "350px", minHeight: "200px" }}
        whileHover={{ scale: 1.02 }}
        animate={{ y: [-5, 5, -5] }} // Floating effect
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Header */}
        <h3 className="text-white-50 fs-6 text-uppercase mb-3" style={{ letterSpacing: "2px" }}>
          Reason Why I Love You
        </h3>

        {/* The Reason Text Area */}
        <div className="flex-grow-1 d-flex align-items-center justify-content-center mb-3" style={{ minHeight: "80px" }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-white display-6 mb-0"
              style={{ fontFamily: greatVibes.style.fontFamily, lineHeight: "1.2" }}
            >
              "{reasons[index]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* The Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextReason}
          className="btn btn-danger rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-bold shadow"
          style={{ fontSize: "0.9rem" }}
        >
          <FaHeart className="text-white" />
          <span>Tell Me Another</span>
        </motion.button>

      </motion.div>
    </div>
  );
}