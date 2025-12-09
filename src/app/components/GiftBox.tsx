"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaTimes, FaHeart, FaGift, FaStar } from "react-icons/fa";
import confetti from "canvas-confetti";

interface GiftBoxProps {
  boxNumber: number;
  title: string;     
  message: string;    
  isSelected: boolean;
  onSelect: () => void;
  onClose: () => void;
}

export default function GiftBox({ 
  boxNumber, 
  title,
  message,
  isSelected, 
  onSelect, 
  onClose 
}: GiftBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isSelected) setIsOpen(false);
  }, [isSelected]);

  const handleClick = () => {
    if (!isSelected) {
      onSelect();
      setTimeout(() => {
        setIsOpen(true);
        triggerConfetti();
      }, 600);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffc107', '#dc3545', '#ffffff'],
      zIndex: 9999
    });
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    onClose();
  };

  const containerVariants: Variants = {
    idle: { 
      y: 0,
      transition: { duration: 0.5 }
    },
    floating: { 
      y: [-6, 6, -6],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" as any,
        delay: boxNumber * 0.1 
      }
    },
    selected: {
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      className={`position-relative d-flex justify-content-center align-items-end ${
        isSelected ? "position-fixed top-50 start-50 translate-middle" : ""
      }`}
      style={{ 
        width: isSelected ? "350px" : "100%", 
        height: isSelected ? "400px" : "200px",
        zIndex: isSelected ? 2000 : 1, 
        cursor: isSelected ? "default" : "pointer",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1 }}
    >
      
      <AnimatePresence>
        {isOpen && isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="position-absolute bg-white shadow-lg p-4 text-center border-top border-4 border-danger d-flex flex-column align-items-center"
            style={{ width: "280px", zIndex: 2001, bottom: "20px" }}
          >
            <div 
              onClick={handleClose}
              className="position-absolute top-0 end-0 p-3 text-secondary opacity-50 hover-opacity-100"
              style={{ cursor: "pointer" }}
            >
              <FaTimes size={20} />
            </div>

            <div className="text-danger mb-3">
               <FaGift size={36} />
            </div>
            
            <h4 className="fw-bold text-dark mb-2" style={{ fontFamily: "serif" }}>
              {title} 
            </h4>
            
            <p className="text-muted small mb-0 fst-italic" style={{ lineHeight: "1.5" }}>
              "{message}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className="position-relative d-flex justify-content-center align-items-end"
        style={{ width: "100%", height: "100%" }}
        variants={containerVariants}
        animate={isSelected ? "selected" : "floating"}
        whileHover={!isSelected ? { scale: 1.05 } : {}}
      >
        <motion.div
            className="position-absolute mx-auto"
            style={{ 
                width: isSelected ? "280px" : "140px", 
                height: isSelected ? "60px" : "30px", 
                bottom: isSelected ? "255px" : "108px",
                backgroundColor: "#dc3545",
                borderBottom: "5px solid #b02a37",
                boxShadow: "0 0 30px 5px rgba(220, 53, 69, 0.8)", 
                zIndex: 10
            }}
            animate={isOpen ? { y: -140, rotate: -5, opacity: 0 } : { y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
        >
             <div className="position-absolute start-50 translate-middle-x h-100" 
                  style={{ width: isSelected ? "50px" : "25px", backgroundColor: "#ffc107" }} />
             
             <div 
                className="position-absolute start-50 translate-middle-x"
                style={{ 
                    top: isSelected ? "-60px" : "-30px", 
                    width: isSelected ? "120px" : "60px", 
                    height: isSelected ? "100px" : "50px",
                    filter: "drop-shadow(0 0 15px rgba(255, 193, 7, 0.8))"
                }}
             >
                <svg viewBox="0 0 100 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 50 C 20 50, 0 30, 0 15 C 0 0, 20 0, 40 30 Z" fill="#ffc107" />
                    <path d="M50 50 C 80 50, 100 30, 100 15 C 100 0, 80 0, 60 30 Z" fill="#ffc107" />
                    <path d="M50 50 L 30 80 L 45 80 Z" fill="#ffc107" />
                    <path d="M50 50 L 70 80 L 55 80 Z" fill="#ffc107" />
                    <circle cx="50" cy="50" r="10" fill="#ffca2c" />
                </svg>
             </div>
        </motion.div>

        <motion.div
            className="d-flex justify-content-center position-relative"
            style={{ 
                width: isSelected ? "260px" : "130px", 
                height: isSelected ? "260px" : "110px",
                backgroundColor: "#dc3545",
                boxShadow: "0 0 50px 10px rgba(220, 53, 69, 0.6)" 
            }}
        >
             <div className="h-100" style={{ width: isSelected ? "50px" : "25px", backgroundColor: "#ffc107" }} />
             <div className="position-absolute top-50 start-0 w-100 translate-middle-y" 
                  style={{ height: isSelected ? "40px" : "20px", backgroundColor: "#ffc107" }} />

             {!isOpen && (
               <div className="position-absolute bg-white rounded-circle d-flex align-items-center justify-content-center text-danger fw-bold shadow-sm"
                    style={{ 
                      width: isSelected ? "50px" : "30px", 
                      height: isSelected ? "50px" : "30px", 
                      bottom: "15px", 
                      right: "15px",
                      fontSize: isSelected ? "1.5rem" : "0.9rem",
                    }}
               >
                 {boxNumber}
               </div>
             )}
        </motion.div>
      </motion.div>

    </motion.div>
  );
}