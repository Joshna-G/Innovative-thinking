"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

// Add a prop for the Spotify link
interface MusicPlayerProps {
  spotifyLink: string;
}

export default function MusicPlayer({ spotifyLink }: MusicPlayerProps) {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 position-relative">
      <div
        className="d-none d-md-block" 
        style={{ width: "80px" }}
      >
        <motion.div
        className="d-none d-md-block" 
        style={{ width: "80px", filter: "drop-shadow(0 0 15px rgba(255, 107, 129, 0.6))" }}
        animate={{ y: [-8, 8, -8] }} // Floating Animation added here
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Image 
          src="/Dashboard/cupid.png" 
          alt="Cute Cupid"  
          width={100}
          height={100}
          style={{ width: "230%", height: "auto", left: "-90px",position: "relative" }}
        />
      </motion.div>
      </div>

      <a 
        href={spotifyLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <motion.div 
          className="position-relative bg-dark rounded-4 p-3 border border-secondary shadow-lg overflow-hidden mt-5" 
          style={{ width: "240px", height: "130px",cursor: "pointer", boxShadow: "0 0 25px rgba(220, 53, 69, 0.4), inset 0 0 10px rgba(255,255,255,0.05)" }}
          whileHover="hover"
        >
          <div className="d-flex align-items-center gap-2 mb-2 text-white-50">
            <FaSpotify className="text-success fs-4" />
            <span style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>OUR ANTHEM</span>
          </div>

          <div className="bg-white rounded-3 p-2 d-flex justify-content-center align-items-center">
              <Image 
                src="/Dashboard/music_code.jpeg" 
                alt="Scan our song"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto", filter: "contrast(1.2)" }}
              />
          </div>
        </motion.div>
      </a>
    </div>
  );
}