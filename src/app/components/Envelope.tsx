"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface EnvelopeProps {
  id: number;
  sender: string;
  onClick: () => void;
  delay: number;
}

export default function Envelope({ id, sender, onClick, delay }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        translateY: [0, -10, 0] 
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        translateY: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2 
        }
      }}
      className="position-relative cursor-pointer"
      style={{ width: "280px", height: "180px", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div 
        className="position-absolute w-100 h-100 bg-danger rounded shadow-sm"
        style={{ zIndex: 1 }}
      />

      <motion.div
        className="position-absolute bg-white shadow-sm d-flex align-items-center justify-content-center p-3"
        style={{
          width: "90%",
          height: "85%",
          left: "5%",
          top: "10%",
          zIndex: 2,
          fontFamily: "serif",
        }}
        animate={{ y: isHovered ? -60 : 0 }} 
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <div className="text-center">
          <small className="text-muted d-block mb-1">Message {id}</small>
          <strong className="text-danger" style={{ fontFamily: "cursive" }}>Dear Love...</strong>
        </div>
      </motion.div>

      <div 
        className="position-absolute w-100 bottom-0 start-0"
        style={{ 
          height: "100%", 
          zIndex: 3,
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
          background: "linear-gradient(135deg, #dc3545 0%, #b02a37 100%)",
          clipPath: "polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)"
        }}
      />

      <motion.div
        className="position-absolute w-100 top-0 start-0"
        style={{
          height: "100px",
          zIndex: isHovered ? 1 : 4,
          background: "#c82333",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          transformOrigin: "top",
        }}
        animate={{ rotateX: isHovered ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="position-absolute start-50 translate-middle text-white"
        style={{ top: "40%", zIndex: 5 }}
        animate={{ 
          rotateX: isHovered ? 180 : 0,
          opacity: isHovered ? 0 : 1 
        }}
        transition={{ duration: 0.2 }}
      >
        <FaHeart size={30} className="drop-shadow" />
      </motion.div>
    </motion.div>
  );
}