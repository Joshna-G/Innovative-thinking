"use client";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';
import Image from "next/image";
import BottomNav from "../components/BottomNav"; 
import FloatingLove from "../components/FloatingLove"; 
import SplashCursor from "../components/SplashCursorSmokey";

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

const milestones = [
  {
    id: 1,
    date: "26 February 2010", 
    title: "First Meeting",
    description:
      "A single unexpected glance… and everything changes. That one moment is enough for a lifetime to take a new direction.",
    image: "/Timeline/img1.jpg",
  },
  {
    id: 2,
    date: "3 March 2010",
    title: "Silent Attraction",
    description:
      "No confessions. No bold moves. Just two hearts slowly noticing each other — quietly, naturally, irresistibly.",
    image: "/Timeline/img2.jpg",
  },
  {
    id: 3,
    date: "26 June 2010",
    title: "Family Issues",
    description:
      "Love meets its first obstacle. Strict rules, fear of judgement, and traditions begin to weigh heavily on Jessie.",
    image: "/Timeline/img3.jpg",
  },
  {
    id: 4,
    date: "17 January 2011",
    title: "Railway Station Moment",
    description:
      "Away from chaos, they finally speak honestly. Confusion, hope, and longing come together in one unforgettable moment.",
    image: "/Timeline/img4.jpg",
  },
  {
    id: 5,
    date: "14 February 2011",
    title: "Secret Meetings",
    description:
      "They meet in silence, walk in shadows, and hold on to love in ways only they can understand. Every moment feels stolen, sacred.",
    image: "/Timeline/img5.jpg",
  },
  {
    id: 6,
    date: "25 February 2011",
    title: "First Breakup",
    description:
      "Overwhelmed by reality, Jessie steps away. Hearts break, dreams pause, and both are left with unspoken words.",
    image: "/Timeline/img6.jpg",
  },
  {
    id: 7,
    date: "15 March 2012",
    title: "Kerala Reunion",
    description:
      "In the calm backwaters, fate brings them together again. The spark returns instantly — warm, familiar, breathtaking.",
    image: "/Timeline/img7.jpg",
  },
  {
    id: 8,
    date: "24 April 2012",
    title: "Rekindled Love",
    description:
      "Love finds its way back. With truths shared and fears softened, they hold onto each other like never before.",
    image: "/Timeline/img8.jpg",
  },
  {
    id: 9,
    date: "28 July 2012",
    title: "Final Separation",
    description:
      "Life pulls them apart again. No anger, only pain. Some stories pause not because love ends… but because life demands it.",
    image: "/Timeline/img9.jpg",
  },
  {
    id: 10,
    date: "08 November 2015",
    title: "New Beginnings",
    description:
      "Karthik steps into a new world, shaping his dreams, carrying memories that still feel alive within him.",
    image: "/Timeline/img10.jpg",
  },
  {
    id: 11,
    date: "22 December 2018",
    title: "Acceptance",
    description:
      "They meet again — older, calmer, healed. They realise their paths are different, yet their story remains beautiful forever.",
    image: "/Timeline/img11.jpg",
  },
];

export default function TimelinePage() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #1a1a1a;
          color: white;
          overflow-x: hidden;
          width: 100vw;
          margin: 0;
        }

        aside, header, nav.navbar, .sidebar {
          display: none !important;
        }
      `}</style>

      <main 
        className="min-vh-100 position-relative w-100 d-flex flex-column align-items-center"
        style={{ backgroundColor: "#1a1a1a", paddingBottom: "120px" }}
      >
        <FloatingLove />
        <SplashCursor />

        <Container className="pt-5 position-relative">
          <div className="text-center mb-5 mt-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-4 fw-bold text-white"
              style={{ fontFamily: "serif" }}
            >
              Our <span className="text-danger" style={{ fontFamily: greatVibes.style.fontFamily }}>Journey</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white-50 lead"
            >
              Every step we took to get here.
            </motion.p>
          </div>

          <div className="position-relative py-4">
            <FloatingLove />

            <div 
                className="position-absolute d-none d-md-block"
                style={{
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100%", 
                    zIndex: 0,
                    pointerEvents: "none"
                }}
            >
                <svg width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: "visible" }}>
                    <defs>
                        <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="rgba(220,53,69,0.1)" />
                            <stop offset="50%" stopColor="#dc3545" />
                            <stop offset="100%" stopColor="rgba(220,53,69,0.1)" />
                        </linearGradient>
                    </defs>
                    <path 
                        d="M 50,0 
                           Q 100,150 50,300 
                           T 50,600 
                           T 50,900 
                           T 50,1200 
                           T 50,1500 
                           T 50,1800 
                           T 50,2100
                           T 50,2400
                           T 50,2700
                           T 50,3000
                           T 50,3300
                           T 50,3600
                           T 50,3900
                           T 50,4200
                           T 50,4500
                           T 50,4800
                           T 50,5100
                           T 50,5400" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="3" 
                        strokeDasharray="10, 5" 
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div 
                className="position-absolute d-block d-md-none"
                style={{
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(220,53,69,0.1), #dc3545, rgba(220,53,69,0.1))",
                    borderRadius: "2px",
                    zIndex: 0,
                    pointerEvents: "none"
                }}
            />

            <div className="d-flex flex-column gap-5">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <Row key={milestone.id} className="align-items-center position-relative justify-content-center">
                    
                    <Col md={5} className={`d-flex ${isEven ? 'justify-content-end text-md-end' : 'justify-content-end'} mb-3 mb-md-0`}>
                      {isEven ? (
                        <TimelineCard milestone={milestone} align="right" />
                      ) : (
                        <div className="d-none d-md-block" />
                      )}
                    </Col>

                    <Col md={1} xs={2} className="d-flex justify-content-center position-relative my-3 my-md-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="bg-danger rounded-circle shadow-lg"
                          style={{ 
                             width: "25px", 
                             height: "25px", 
                             zIndex: 2,
                             border: "4px solid #1a1a1a",
                             boxShadow: "0 0 15px rgba(220, 53, 69, 0.8)" 
                          }}
                        />
                    </Col>

                    <Col md={5} className={`d-flex ${!isEven ? 'justify-content-start text-md-start' : 'justify-content-start'} mt-3 mt-md-0`}>
                      {!isEven ? (
                        <TimelineCard milestone={milestone} align="left" />
                      ) : (
                        <div className="d-none d-md-block" />
                      )}
                    </Col>
                  </Row>
                );
              })}
            </div>
          </div>
        </Container>
        <BottomNav />
      </main>
    </>
  );
}

function TimelineCard({ milestone, align }: { milestone: any, align: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? 50 : -50, rotate: align === 'left' ? 5 : -5 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="p-3 rounded-4 shadow-lg position-relative"
      style={{ 
        maxWidth: "400px", 
        width: "100%",
        backgroundColor: "rgba(30, 30, 30, 0.4)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className={`d-flex ${align === 'right' ? 'justify-content-md-end' : 'justify-content-md-start'} justify-content-center mb-2`}>
        <span className="badge bg-danger rounded-pill px-3 py-2 shadow-sm" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
          {milestone.date}
        </span>
      </div>
    
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden rounded-3 mb-3 position-relative border border-secondary mx-auto shadow"
        style={{ height: "220px", width: "100%" }}
      >
        <Image 
          src={milestone.image} 
          alt={milestone.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <div className={`text-center ${align === 'right' ? 'text-md-end' : 'text-md-start'}`}>
        <h3 className="h4 text-white fw-bold mb-2" style={{ fontFamily: "serif" }}>{milestone.title}</h3>
        <p className="text-white-50 small mb-0">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}