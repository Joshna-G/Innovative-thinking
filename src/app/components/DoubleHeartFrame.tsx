"use client";
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';

// ... (Imports and Fonts remain same)

interface DoubleHeartFrameProps {
  image1: string; 
  image2: string; 
}

export default function DoubleHeartFrame({ image1, image2 }: DoubleHeartFrameProps) {
  const elegantHeartPath = "M140,20 C73,20 20,74 20,140 C20,275 156,310 248,408 C350,310 496,275 496,140 C496,74 443,20 376,20 C318,20 282,55 258,85 C234,55 198,20 140,20 Z";

  return (
    // UPDATED: Added maxWidth: "100%" and padding to prevent cut-off on small screens
    <div className="position-relative d-inline-block" style={{ width: "600px", maxWidth: "100%", padding: "10px" }}>
      <motion.svg 
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ width: "100%", height: "auto", overflow: "visible" }} // UPDATED: Responsive sizing
      >
        <defs>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dx="5" dy="10" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="clipLeft">
             <path d={elegantHeartPath} />
          </clipPath>
          <clipPath id="clipRight">
             <path d={elegantHeartPath} />
          </clipPath>
        </defs>

        <g transform="translate(380, 120) rotate(15) scale(0.65)" filter="url(#dropShadow)">
           <path d={elegantHeartPath} fill="none" stroke="white" strokeWidth="40" />
           <image 
             href={image2} 
             width="520" 
             height="450" 
             clipPath="url(#clipRight)" 
             preserveAspectRatio="xMidYMid slice"
           />
        </g>

        <g transform="translate(50, 50) rotate(-10) scale(0.85)" filter="url(#dropShadow)">
           <path d={elegantHeartPath} fill="none" stroke="white" strokeWidth="35" />
           <image 
             href={image1} 
             width="520" 
             height="450" 
             clipPath="url(#clipLeft)" 
             preserveAspectRatio="xMidYMid slice"
           />
        </g>

      </motion.svg>
    </div>
  );
}