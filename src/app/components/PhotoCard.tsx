"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoCardProps {
  url: string;
  index: number;
  updateZIndex: (index: number) => void; 
  zIndex: number;
  caption: string; 
}

export default function PhotoCard({ url, index, updateZIndex, zIndex, caption }: PhotoCardProps) {
  const randomRotate = Math.random() * 20 - 10; 
  const randomX = Math.random() * 40 - 20; 
  const randomY = Math.random() * 40 - 20;

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} 
      whileHover={{ scale: 1.1, rotate: 0, cursor: "grab", zIndex: 100 }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      onMouseDown={() => updateZIndex(index)} 
      initial={{ opacity: 0, scale: 0.5, y: 100, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: randomY, 
        x: randomX, 
        rotate: randomRotate,
        zIndex: zIndex 
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="position-relative bg-white p-3 shadow-lg"
      style={{
        width: "280px",
        maxWidth: "45vw", 
        aspectRatio: "3/4",
        zIndex: zIndex,
        userSelect: "none"
      }}
    >
      <div 
        className="position-absolute start-50 top-0 translate-middle-x bg-warning opacity-50 shadow-sm"
        style={{ width: "80px", height: "25px", marginTop: "-12px", transform: "rotate(-2deg)" }}
      />

      <div className="w-100 h-75 position-relative overflow-hidden bg-light mb-3">
        <Image 
          src={url} 
          alt="Memory" 
          fill
          className="object-fit-cover"
          draggable={false} 
        />
      </div>

      <div className="text-center h-25 d-flex align-items-center justify-content-center">
         <p className="mb-0 text-muted" style={{ fontFamily: "cursive", fontSize: "1.2rem", lineHeight: "1.1" }}>
           {caption} 
         </p>
      </div>
    </motion.div>
  );
}