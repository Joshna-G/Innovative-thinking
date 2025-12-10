"use client";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';
import FloatingLove from "./components/FloatingLove";
import DoubleHeartFrame from "./components/DoubleHeartFrame"; 
import LoveTimer from "./components/LoveTimer";
import MusicPlayer from "./components/MusicPlayer";
import SplashCursor from "./components/SplashCursor";
import ReasonGenerator from "./components/ReasonGenerator";

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented by browser. User interaction needed.");
          document.addEventListener("click", () => {
             audioRef.current?.play();
          }, { once: true });
        });
      }
    }
  }, []);
  return (
    <>
    <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <audio 
        ref={audioRef} 
        src="/music-file.mp3"  
        loop 
    />
    <main 
      className="position-relative d-flex align-items-center justify-content-center" 
      style={{ 
        minHeight: "calc(100vh - 70px)", 
        overflow: "hidden", 
        backgroundColor: "#1a1a1a",   
        paddingBottom: "50px"
      }}
    >
      <SplashCursor />

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
          pointerEvents: "none",
          willChange: "transform, opacity"
        }}
      />

      <FloatingLove />

      <Container className="position-relative py-5" style={{ zIndex: 10 }}>

        <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
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
        </div>

        <Row className="align-items-center justify-content-center mb-5">
            <Col lg={6} md={12} className="d-flex justify-content-center mb-4 mb-lg-0">
                <motion.div 
                  style={{ marginTop: "120px" , marginRight: "-20px", willChange: "transform"}}
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ 
                    duration: 6,  
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <DoubleHeartFrame 
                    image1="/Dashboard/img1.jpg"      
                    image2="/Dashboard/img2.jpg"      
                  />
                </motion.div>
            </Col>

            <Col lg={6} md={12} className="d-flex flex-column align-items-center gap-4">
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1.5, duration: 1 }}
                   className="w-100 d-flex justify-content-center"
                >
                   <LoveTimer startDate="2025-09-24" /> 
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2, duration: 1 }}
                   className="w-100 d-flex justify-content-center"
                >
                  <ReasonGenerator />
                </motion.div>
            </Col>
        </Row>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 2, duration: 1 }}
           className="d-flex justify-content-center mt-4"
        >
          <MusicPlayer spotifyLink="https://open.spotify.com/track/3l7JaDIJmWMpvcJqhTJjrk?si=2f0af1c8be87426c" />
        </motion.div>

        <div className="text-center mt-5 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <h6 
                className="display-4 text-white" 
                style={{ 
                  fontFamily: "serif", 
                  textShadow: "0 0 20px rgba(255, 107, 129, 0.5)" 
                }}
              >
                Wait My <span className="text-danger" style={{ fontFamily: greatVibes.style.fontFamily }}>Darling..</span>
              </h6>
              
              <motion.p 
                className="lead text-white-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                style={{ fontSize: "1.5rem", letterSpacing: "1px" }}
              >
               I have so much more planned for us… stay tuned, my love!
              </motion.p>
            </motion.div>
        </div>
        
      </Container>
    </main>
    </>
  );
}