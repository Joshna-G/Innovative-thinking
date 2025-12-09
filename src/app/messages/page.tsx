"use client";
import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Envelope from "../components/Envelope"; 
import SplashCursor from "../components/SplashCursor";
import VintagePaper from "../components/VintagePaper"; 
import { AnimatePresence, motion } from "framer-motion";
import FloatingLove from "../components/FloatingLove"; 

  const messages = [
    {
      id: 1,
      sender: "Joe...",
      date: "January 24, 2025",
      text: `My Dearest,

  They say you don't find love, it finds you.
  I never knew what I was looking for until you walked into my life.
  You are the surprise I never expected, but the one blessing I will always be thankful for.

  I love you.`
    },
    {
      id: 2,
      sender: "Joe...",
      date: "February 24, 2025",
      text: `To My Favorite Person,

  I just wanted to remind you that your smile is my favorite thing in the world.
  When you smile, the whole room lights up, and my heart skips a beat.
  Keep smiling, because you make my life beautiful.

  Always yours.`
    },
    {
      id: 3,
      sender: "Joe...",
      date: "March 24, 2025",
      text: `My Love,

  In a sea of people, my eyes will always search for you.
  You are my calm in the chaos, my rock when I am weak, and my home when I feel lost.
  Thank you for being my safe place.

  Forever.`
    },
    {
      id: 4,
      sender: "Joe...",
      date: "April 24, 2025",
      text: `Darling,

  Every love song suddenly makes sense now.
  Before you, they were just words. Now, every melody, every lyric, reminds me of you.
  You are the music in my heart that never stops playing.

  Love always.`
    },
    {
      id: 5,
      sender: "Joe...",
      date: "May 24, 2025",
      text: `Hey You,

  If I could give you one thing in life, I would give you the ability to see yourself through my eyes.
  Only then would you realize how special you are to me.
  You are everything I ever wanted and more.

  Yours, Joe...`
    },
    {
      id: 6,
      sender: "Joe...",
      date: "June 24, 2025",
      text: `My Heart,

  I choose you.
  And I'll choose you over and over and over.
  Without pause, without a doubt, in a heartbeat.
  I’ll keep choosing you, today and every tomorrow.

  With all my love.`
    },
    {
      id: 7,
      sender: "Joe...",
      date: "July 24, 2025",
      text: `My Soulmate,

  It’s not just about the big moments.
  It’s the way you laugh, the way you look at me, and the way you hold my hand.
  It’s the little things that make me fall in love with you every single day.

  Yours forever.`
    },
    {
      id: 8,
      sender: "Joe...",
      date: "August 24, 2025",
      text: `To the Man of My Dreams,

  I want to be the reason you look down at your phone and smile.
  I want to be the reason you wake up happy.
  I want to be the one who makes you believe in forever.

  Love, Joe...`
    },
    {
      id: 9,
      sender: "Joe...",
      date: "September 24, 2025",
      text: `My King,

  Meeting you was fate, becoming your friend was a choice, but falling in love with you was beyond my control.
  You have captivated my soul in a way no one else ever could.
  I am yours, completely.

  Endlessly.`
    },
    {
      id: 10,
      sender: "Joe...",
      date: "Ocutober 24, 2025",
      text: `Honey,

  Distance means so little when someone means so much.
  No matter where you are, or where I am, the moon is the same.
  And under this same sky, my heart beats only for you.

  Missing you.`
    },
    {
      id: 11,
      sender: "Joe...",
      date: "November 24, 2025",
      text: `My Everything,

  I promise to plant kisses like seeds on your body, so in time, you can grow to love yourself as I love you.
  You are a masterpiece, and I am the luckiest girl in the world to call you mine.

  Always.`
    },
    {
      id: 12,
      sender: "Joe...",
      date: "December 24, 2025",
      text: `To My Forever,

  Let’s grow old together.
  Let’s make memories that fade into stories we tell our grandchildren.
  Let’s laugh until we cry and love until the end of time.
  You are my happily ever after.

  Yours, Joe...`
    }
  ];

export default function MessagePage() {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-vh-100 position-relative pb-5" style={{ backgroundColor: "#1a1a1a" }}>
      <FloatingLove />
      <SplashCursor />
      <Container className="pt-5">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white display-4 fw-bold" 
          style={{ fontFamily: "serif", marginBottom: "100px" }}
        >
          My Letters to You
        </motion.h1>

        <Row className="g-5 justify-content-center">
          {messages.map((msg, index) => (
            <Col 
              key={msg.id} 
              xs={12} md={6} lg={4} xl={3} 
              className="d-flex justify-content-center"
              style={{ 
                zIndex: hoveredIndex === index ? 50 : 1, 
                position: "relative",
                marginBottom: "60px" 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
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