"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav"; 
import PhotoCard from "../components/PhotoCard"; 
import FloatingLove from "../components/FloatingLove"; 
import SplashCursor from "../components/SplashCursor";

const photos = [
  { url: "/Gallery/img1.jpg", caption: "The moment my story found its beginning." },
  { url: "/Gallery/img2.jpg", caption: "A glance that stayed forever." },
  { url: "/Gallery/img3.jpg", caption: "Held by your warmth, always." },
  { url: "/Gallery/img4.jpg", caption: "Love feels like this — effortless." },
  { url: "/Gallery/img5.jpg", caption: "You, in every heartbeat." },
  { url: "/Gallery/img6.jpg", caption: "A touch that said everything." },
  { url: "/Gallery/img7.jpg", caption: "Lost in you, beautifully." },
  { url: "/Gallery/img8.jpg", caption: "You felt like a story I wanted to live." },
  { url: "/Gallery/img9.jpg", caption: "Your presence… my most beautiful interruption" },
  { url: "/Gallery/img10.jpg", caption: "Your smile, my calm." },
  { url: "/Gallery/img11.jpg", caption: "The world blurred… only you remained clear" },
  { url: "/Gallery/img12.jpg", caption: "Wherever we go, love follows." },
];

export default function PhotosPage() {
  const [zIndexes, setZIndexes] = useState(photos.map((_, i) => i));

  const bringToFront = (index: number) => {
    setZIndexes((prev) => {
      const newIndexes = [...prev];
      const maxZ = Math.max(...newIndexes);
      newIndexes[index] = maxZ + 1;
      return newIndexes;
    });
  };

  return (
    <main 
      className="w-100 position-relative bg-dark"
      style={{ 
        minHeight: "100vh",
        backgroundImage: "radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 100%)",
        paddingBottom: "120px",
        overflowX: "hidden",     
        overflowY: "auto"       
      }}
    >
      <FloatingLove />
       <SplashCursor />
      <div 
        className="position-absolute top-0 start-0 w-100 text-center pt-5" 
        style={{ zIndex: 50, pointerEvents: "none" }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-4 text-white fw-bold"
          style={{ fontFamily: "serif", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Our <span className="text-danger">Gallery</span>
        </motion.h1>
        <p className="text-white-50">Move our memories closer to your heart!</p>
      </div>

      <div 
        className="container-fluid d-flex flex-wrap justify-content-center align-items-center gap-4"
        style={{  minHeight: "100vh", paddingTop: "180px",  paddingBottom: "100px" }}
      >
        {photos.map((photo, index) => (
          <PhotoCard 
            key={index} 
            index={index} 
            url={photo.url}       
            caption={photo.caption} 
            updateZIndex={bringToFront}
            zIndex={zIndexes[index]}
          />
        ))}
      </div>

      <BottomNav />
    </main>
  );
}