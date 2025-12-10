"use client";
import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav";
import Carousel3D from "../components/Carousel3D";
import FloatingLove from "../components/FloatingLove"; 
import SplashCursor from "../components/SplashCursor";

export default function VideosPage() {
  return (
    <main 
      className="vh-100 w-100 bg-black position-relative overflow-hidden d-flex flex-column"
      style={{ paddingBottom: "100px" }}
    >
        <SplashCursor />
        <FloatingLove />
        <div className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-25"
             style={{ width: "600px", height: "600px", background: "radial-gradient(circle, #dc3545 0%, transparent 70%)", filter: "blur(100px)" }} />

        <div className="text-center pt-5 position-relative z-10">
            <h1 className="display-4 fw-bold text-white" style={{ fontFamily: "serif" }}>
                Our <span className="text-danger">Story</span>
            </h1>
            <p className="text-white-50">If our love was a film… this would be the trailer.</p>
        </div>

        <div className="flex-grow-1 position-relative z-10">
            <Carousel3D />
        </div>

        <BottomNav />
    </main>
  );
}