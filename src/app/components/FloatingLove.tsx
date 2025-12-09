"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsBalloonHeartFill } from "react-icons/bs";

export default function FloatingLove() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, 
      delay: Math.random() * 5, 
      duration: Math.random() * 10 + 10,
      size: Math.random() * 20 + 10,
      type: Math.random() > 0.5 ? "heart" : "balloon", 
      color: Math.random() > 0.5 ? "#dc3545" : "#ff6b81",
    }));
    setElements(newElements);
  }, []);

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden" 
      style={{ 
        zIndex: 0, 
        pointerEvents: "none" 
      }}
    >
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: "110vh", x: `${el.x}vw`, opacity: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.8, 0], 
            rotate: [0, 10, -10, 0] 
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
          style={{ position: "absolute" }}
        >
          {el.type === "heart" ? (
            <FaHeart size={el.size} color={el.color} style={{ filter: "drop-shadow(0 0 5px rgba(255,0,0,0.5))" }} />
          ) : (
            <BsBalloonHeartFill size={el.size * 1.5} color={el.color} style={{ opacity: 0.8 }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}