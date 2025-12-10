"use client";
import { useState } from "react";
import { motion, useMotionValue, animate, PanInfo, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const CARD_WIDTH = 260;  
const RADIUS = 450;      

const VIDEOS = [
  { id: 1, title: "Our Beginning",  date: "June '23", src: "/Videos/v-1.mp4" },
  { id: 2, title: "First Trip", date: "Aug '23", src: "/Videos/v-2.mp4" },
  { id: 3, title: "Proposal", date: "Dec '23", src: "/Videos/v-3.mp4" },
  { id: 4, title: "Lazy Days", date: "Jan '24", src: "/Videos/v-4.mp4" },
  { id: 5, title: "Birthday", date: "Feb '24", src: "/Videos/v-1.mp4" },
  { id: 6, title: "Paris", date: "Mar '24", src: "/Videos/v-2.mp4" },
  { id: 7, title: "Cooking", date: "Apr '24", src: "/Videos/v-3.mp4" },
  { id: 8, title: "Just Us", date: "May '24", src: "/Videos/v-4.mp4" },
];

const CARD_COUNT = VIDEOS.length;
const ANGLE_PER_CARD = 360 / CARD_COUNT;

export default function Carousel3D() {
  const rotation = useMotionValue(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const onDrag = (event: any, info: PanInfo) => {
    const currentRotation = rotation.get();
    rotation.set(currentRotation + info.delta.x * 0.2);
  };

  const onDragEnd = (event: any, info: PanInfo) => {
    const currentRotation = rotation.get();
    const velocity = info.velocity.x;
    let nextAngle = currentRotation + velocity * 0.2;
    const snapAngle = Math.round(nextAngle / ANGLE_PER_CARD) * ANGLE_PER_CARD;
    
    animate(rotation, snapAngle, {
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 1
    });
  };

  return (
    <>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden position-relative"
           style={{ perspective: "1000px" }}> 
        
        <motion.div
          className="position-relative"
          style={{ width: CARD_WIDTH, height: 350, transformStyle: "preserve-3d", rotateY: rotation, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} 
          dragElastic={0}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          {VIDEOS.map((vid, index) => {
            const angle = index * ANGLE_PER_CARD;
            
            return (
              <div
                key={vid.id}
                className="position-absolute d-flex flex-column align-items-center justify-content-center"
                style={{ width: CARD_WIDTH, height: 350, transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`, backfaceVisibility: "hidden", }} >
                <motion.div
                  onClick={() => setActiveVideo(vid.src)} 
                  className="w-100 h-100 rounded-0 shadow-lg position-relative d-flex align-items-end justify-content-center p-4 border border-white border-opacity-10 bg-black overflow-hidden"
                  style={{  cursor: "pointer"  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                   <video 
                     className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                     src={`${vid.src}#t=1.0`} 
                     muted 
                     loop 
                     playsInline
                     onMouseOver={(e) => e.currentTarget.play()}
                     onMouseOut={(e) => e.currentTarget.pause()}
                   />

                   <div className="position-absolute top-0 start-0 w-100 h-100" 
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)" }} 
                   />

                   <div className="position-absolute top-50 start-50 translate-middle bg-black bg-opacity-25 rounded-circle p-3 backdrop-blur border border-white border-opacity-25 shadow">
                       <FaPlay size={20} className="text-white" />
                   </div>

                   <div className="text-center text-white position-relative z-1">
                       <h3 className="fw-bold mb-1 display-6" style={{ fontFamily: "serif" }}>{vid.title}</h3>
                       <p className="small opacity-75 text-uppercase tracking-widest">{vid.date}</p>
                   </div>
                </motion.div>

                <div className="position-absolute top-100 start-0 w-100 h-25"
                     style={{  background: `linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)`, transform: "scaleY(-1)", opacity: 0.3, maskImage: "linear-gradient(to bottom, black, transparent)" }} 
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-90"
            style={{ zIndex: 9999, backdropFilter: "blur(10px)" }}
            onClick={() => setActiveVideo(null)} 
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="position-relative bg-black rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25"
              style={{ width: "90%", maxWidth: "900px", aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()} 
            >
               <button 
                 onClick={() => setActiveVideo(null)}
                 className="position-absolute top-0 end-0 m-3 btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                 style={{ width: "40px", height: "40px", zIndex: 10 }}
               >
                 <FaTimes className="text-white" />
               </button>

               <video 
                 src={activeVideo} 
                 controls 
                 autoPlay 
                 className="w-100 h-100 object-fit-contain" 
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}