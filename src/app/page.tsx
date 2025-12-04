"use client";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';
import FloatingLove from "./components/FloatingLove";
import DoubleHeartFrame from "./components/DoubleHeartFrame"; 

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

export default function Home() {
  return (
    <main 
      className="position-relative d-flex align-items-center justify-content-center" 
      style={{ 
        minHeight: "calc(100vh - 70px)", 
        backgroundColor: "#1a1a1a", 
        overflow: "hidden"
      }}
    >
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220, 53, 69, 0.2) 0%, rgba(26, 26, 26, 0) 70%)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <FloatingLove />

      <Container className="position-relative text-center" style={{ zIndex: 10 }}>
        <div>
          <DoubleHeartFrame 
            image1="/Profile/joe.jpg"      
            image2="/Profile/joe.jpg"      
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ marginTop: "-40px" }} 
        >
          <h1 
            className="display-2 fw-bold text-white mb-3" 
            style={{ 
              fontFamily: "serif", 
              textShadow: "0 0 20px rgba(255, 107, 129, 0.5)" 
            }}
          >
            Welcome to <span className="text-danger" style={{ fontFamily: greatVibes.style.fontFamily }}>Our Love Story</span>
          </h1>
          
          <motion.p 
            className="lead text-white-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            style={{ fontSize: "1.5rem", letterSpacing: "1px" }}
          >
            A special private place for all our moments.
          </motion.p>
        </motion.div>
        
      </Container>
    </main>
  );
}