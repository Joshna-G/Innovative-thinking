"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "../components/BottomNav";
import GiftBox from "../components/GiftBox";
import { Container, Row, Col } from "react-bootstrap";
import { Great_Vibes } from 'next/font/google';
import FloatingLove from "../components/FloatingLove"; 
import SplashCursor from "../components/SplashCursorSmokey";

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

const gifts = [
  { id: 1, title: "Movie Night", message: "Good for one movie of your choice (I buy popcorn!)." },
  { id: 2, title: "Big Hug", message: "Redeemable anytime for a long, tight hug." },
  { id: 3, title: "Dinner Date", message: "Lets go to that place you love." },
  { id: 4, title: "Massage", message: "15 minute back massage coupon." },
  { id: 5, title: "Road Trip", message: "Pack your bags, we're going on an adventure." },
  { id: 6, title: "Sweet Treat", message: "I owe you your favorite dessert." },
  { id: 7, title: "Star Gazing", message: "Lets find a quiet spot and look at the sky." },
  { id: 8, title: "A Secret", message: "Ask me anything, I have to answer truthfully." },
  { id: 9, title: "Shopping Spree", message: "I'll carry all the bags." },
  { id: 10, title: "Lazy Day", message: "One full day of doing absolutely nothing together." },
  { id: 11, title: "A Wish", message: "I will grant you one wish within my power." },
  { id: 12, title: "My Heart", message: "It's yours. Always has been, always will be." },
];

export default function SurprisePage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <main 
      className="min-vh-100 w-100 bg-dark text-white position-relative"
      style={{ 
        paddingBottom: "120px",
        overflowX: "hidden" 
      }}
    >
      <SplashCursor />
      <FloatingLove />
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)} 
            className="position-fixed top-0 start-0 w-100 h-100 bg-black"
            style={{ zIndex: 1050, cursor: "pointer" }}
          />
        )}
      </AnimatePresence>

      <div className="text-center pt-5 mb-4 px-3">
        <h1 className="display-4 fw-bold" style={{ fontFamily: "serif" }}>
           Welcome to <span className="text-danger" style={{ fontFamily: greatVibes.style.fontFamily }}>Surprises</span>
        </h1>
        <p className="text-white-50">Open your Gifts..</p>
      </div>

      <Container style={{ zIndex: 1 }}>
        <Row className="g-4 justify-content-center">
          {gifts.map((gift) => (
            <Col key={gift.id} xs={6} md={4} lg={3} className="d-flex justify-content-center position-relative">
              <GiftBox 
                boxNumber={gift.id}
                title={gift.title}     
                message={gift.message} 
                isSelected={selectedId === gift.id}
                onSelect={() => setSelectedId(gift.id)}
                onClose={() => setSelectedId(null)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <BottomNav />
    </main>
  );
}