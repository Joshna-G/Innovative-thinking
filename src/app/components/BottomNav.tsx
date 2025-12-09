"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaHome, FaHistory, FaImages, FaVideo, FaEnvelope, FaGift 
} from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Our Journey", icon: <FaHistory />, path: "/timeline" },
  { name: "Gallery", icon: <FaImages />, path: "/photos" },
  { name: "Cinema", icon: <FaVideo />, path: "/videos" },
  { name: "Notes", icon: <FaEnvelope />, path: "/messages" },
  { name: "Surprise", icon: <FaGift />, path: "/surprise" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <div className="fixed-bottom d-flex justify-content-center pb-4" style={{ zIndex: 9999, pointerEvents: "none" }}>
      <motion.div
        layout
        className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" 
        style={{ 
          pointerEvents: "auto",
          backgroundColor: "transparent", 
          backdropFilter: "blur(4px)", 
          border: "none",
          boxShadow: "none"
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const isHovered = hoveredPath === item.path;
          const showActiveState = isActive || isHovered;

          return (
            <Link key={item.name} href={item.path} style={{ textDecoration: "none" }}>
              <motion.div
                layout
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`d-flex align-items-center justify-content-center rounded-circle position-relative ${
                  showActiveState ? "bg-danger text-white" : "text-white-50" 
                }`}
                style={{
                  height: "45px",
                  minWidth: "45px",
                  padding: showActiveState ? "0 20px" : "0",
                  cursor: "pointer",
                  overflow: "hidden",
                  backgroundColor: showActiveState ? "#dc3545" : "rgba(0,0,0,0.3)" 
                }}
                animate={{ 
                  width: showActiveState ? "auto" : "45px",
                  backgroundColor: showActiveState ? "#dc3545" : "rgba(0,0,0,0.3)",
                  color: showActiveState ? "#fff" : "#rgba(255,255,255,0.7)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 30 
                }}
              >
                <span className="d-flex align-items-center justify-content-center" style={{ fontSize: "1.2rem", minWidth: "20px" }}>
                  {item.icon}
                </span>

                {showActiveState && (
                  <motion.span
                    layout
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fw-bold text-nowrap"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}