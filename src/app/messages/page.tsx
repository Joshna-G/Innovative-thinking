"use client";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Envelope from "../components/Envelope"; 
import SplashCursor from "../components/SplashCursor";
import VintagePaper from "../components/VintagePaper"; 
import { AnimatePresence, motion } from "framer-motion";

const messages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  sender: "Admirer",
  date: "August 24, 2024",
  text: `My Dearest,

This is message #${i + 1}. 
Every moment with you feels like a beautiful dream I never want to wake up from. You are the text I wait for, the smile on my face, and the beat in my heart.

Forever Yours.`
}));

export default function MessagePage() {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  return (
    <main className="min-vh-100 position-relative pb-5" style={{ backgroundColor: "#1a1a1a" }}>
      <SplashCursor />

      <Container className="pt-5">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white mb-5 display-4 fw-bold" 
          style={{ fontFamily: "serif" }}
        >
          My Letters to You
        </motion.h1>

        <Row className="g-5 justify-content-center">
          {messages.map((msg, index) => (
            <Col key={msg.id} xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
              <Envelope 
                id={msg.id} 
                sender={msg.sender} 
                onClick={() => setSelectedMessage(msg)}
                delay={index}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal 
        show={!!selectedMessage} 
        onHide={() => setSelectedMessage(null)} 
        centered
        size="lg"
        contentClassName="bg-transparent border-0"
      >
        <AnimatePresence>
          {selectedMessage && (
            <VintagePaper 
              content={selectedMessage} 
              onClose={() => setSelectedMessage(null)} 
            />
          )}
        </AnimatePresence>
      </Modal>
    </main>
  );
}