"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaHome, FaHistory, FaImages, FaVideo, FaEnvelope, FaGift, FaBars, FaChevronLeft 
} from "react-icons/fa";

// Menu Items
const menuItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Our Journey", icon: <FaHistory />, path: "/timeline" },
  { name: "Gallery", icon: <FaImages />, path: "/photos" },
  { name: "Cinema", icon: <FaVideo />, path: "/videos" },
  { name: "Love Notes", icon: <FaEnvelope />, path: "/messages" },
  { name: "Surprise", icon: <FaGift />, path: "/surprise" }, // Removed extra color logic here to fix bug
];

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sidebarVariants = {
    open: { width: "260px", transition: { type: "spring" as const, stiffness: 100 } },
    closed: { width: "70px", transition: { type: "spring" as const, stiffness: 100 } },
  };

  const textVariants = {
    open: { opacity: 1, display: "block", x: 0 },
    closed: { opacity: 0, display: "none", x: -10 },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      // ADDED: bg-dark, text-white, border-secondary
      className="bg-dark text-white border-end border-secondary position-fixed h-100 d-flex flex-column"
      style={{
        top: "70px", 
        left: 0,
        zIndex: 1040,
        paddingBottom: "100px"
      }}
    >
      {/* Toggle Button */}
      <div className="d-flex justify-content-start align-items-center p-3 mb-2">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="btn btn-outline-secondary border-0 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          {isOpen ? <FaChevronLeft className="text-white" /> : <FaBars className="text-white" />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="d-flex flex-column gap-2 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              style={{ textDecoration: "none" }}
            >
              <motion.div
                // FIXED: Active logic and Hover colors
                className={`d-flex align-items-center p-2 rounded ${
                  isActive 
                    ? "bg-danger text-white shadow"  // Active State (Red)
                    : "text-white-50 hover-effect"   // Inactive State (Grey text, lights up on hover)
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                style={{ height: "50px", cursor: "pointer", transition: "0.2s" }}
              >
                {/* Icon */}
                <span className="fs-5 d-flex align-items-center justify-content-center" style={{ minWidth: "40px" }}>
                  {item.icon}
                </span>

                {/* Text */}
                <motion.span
                  variants={textVariants}
                  className="ms-3 fw-medium text-nowrap"
                >
                  {item.name}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}