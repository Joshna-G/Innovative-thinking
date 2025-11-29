"use client";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

interface VintagePaperProps {
  content: {
    date: string;
    text: string;
    sender: string;
  };
  onClose: () => void;
}

export default function VintagePaper({ content, onClose }: VintagePaperProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="position-relative mx-auto shadow-lg"
      style={{
        width: "100%",
        maxWidth: "600px",
        minHeight: "750px",
        backgroundColor: "#f4e4bc", 
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px),
          radial-gradient(circle at center, transparent 40%, #8b5e3c 100%) `,
        backgroundSize: "100% 2rem, 100% 2rem, 100% 100%", 
        boxShadow: "inset 0 0 60px rgba(139, 69, 19, 0.2), 0 20px 40px rgba(0,0,0,0.5)",
        border: "1px solid #c2b280",
        padding: "80px 60px",
        color: "#3e2723", 
        fontFamily: greatVibes.style.fontFamily,
        fontSize: "1.8rem",
        lineHeight: "2rem",
        borderRadius: "2px",
        clipPath: "polygon(0% 0%, 100% 0%, 98% 50%, 100% 100%, 0% 100%, 2% 50%)",
      }}
    >
      <button 
        onClick={onClose}
        className="position-absolute top-0 end-0 m-4 btn btn-link fs-4 p-0"
        style={{ 
          zIndex: 10, 
          color: "#3e2723", 
          opacity: 0.6,
          transition: "0.3s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
      >
        <FaTimes />
      </button>

      <div className="text-end mb-4" style={{ fontFamily: "serif", fontSize: "1.2rem", opacity: 0.8 }}>
        {content.date}
      </div>

      <h2 className="mb-4 display-6 fw-bold">My Love,</h2>

      <p style={{ whiteSpace: "pre-line" }}>
        {content.text}
      </p>

      <div className="mt-5 text-end">
        With all my heart,<br />
        <span className="fs-1">{content.sender}</span>
      </div>

    </motion.div>
  );
}