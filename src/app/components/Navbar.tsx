"use client";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="fixed-top w-100 bg-dark text-white border-bottom border-secondary"
      style={{ height: "70px",  zIndex: 1050, }} >
      <Container fluid className="h-100 d-flex align-items-center justify-content-between px-4">
        <div className="d-flex align-items-center gap-2">
          <FaHeart className="text-danger fs-4" />
          <span className="fw-bold fs-4" style={{ fontFamily: 'serif', letterSpacing: '1px' }}>
            Love Story
          </span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div 
            className="rounded-circle overflow-hidden border-2 border-secondary position-relative"
            style={{ width: "45px", height: "45px", cursor: "pointer" }}
          >
            <Image 
              src="/Profile/joe.jpg" 
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}