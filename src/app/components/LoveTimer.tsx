"use client";
import { useState, useEffect } from "react";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

interface LoveTimerProps {
  startDate: string; 
}

export default function LoveTimer({ startDate }: LoveTimerProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date(startDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - start;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="text-center mb-4">
      <p className="text-white-50 mb-2" style={{ fontFamily: "serif", fontSize: "1.1rem" }}>
        Loving you for...
      </p>
      <div className="d-flex justify-content-center gap-3 gap-md-4 align-items-center">
        <div className="text-center">
          <div className="display-6 fw-bold text-danger" style={{ fontFamily: greatVibes.style.fontFamily }}>
            {time.days}
          </div>
          <small className="text-white text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>Days</small>
        </div>

        <div className="text-white-50 fs-4">:</div>

        <div className="text-center">
          <div className="display-6 fw-bold text-white" style={{ fontFamily: greatVibes.style.fontFamily }}>
            {time.hours}
          </div>
          <small className="text-white text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>Hrs</small>
        </div>

        <div className="text-white-50 fs-4">:</div>

        <div className="text-center">
          <div className="display-6 fw-bold text-white" style={{ fontFamily: greatVibes.style.fontFamily }}>
            {time.minutes}
          </div>
          <small className="text-white text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>Mins</small>
        </div>
        
         <div className="text-white-50 fs-4">:</div>

        <div className="text-center">
          <div className="display-6 fw-bold text-white" style={{ fontFamily: greatVibes.style.fontFamily }}>
            {time.seconds}
          </div>
          <small className="text-white text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>Secs</small>
        </div>
      </div>
    </div>
  );
}