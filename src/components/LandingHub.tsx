import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

export default function LandingHub() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`landing-hub ${mounted ? "is-visible" : ""}`} ref={hubRef}>
      <div 
        className="hub-bg-wrap"
        style={{ 
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.1)` 
        }}
      >
        <img src="/hub-bg.png" alt="District 8 Hub" className="hub-bg-img" />
        <div className="hub-overlay"></div>
        <div className="hub-grain"></div>
      </div>

      <div className="hub-content">
        <Link to="/" className="hub-logo-link">
          <div className="hub-logo-wrap">
            <img src="/logo.png" alt="District 8" className="hub-logo" />
            <div className="hub-logo-glow"></div>
          </div>
        </Link>

        <nav className="hub-menu">
          <div className="hub-menu-item">
            <Link to="/home" className="hub-link">
              <span className="hub-link-text">HEM</span>
              <span className="hub-link-bg">HOME</span>
            </Link>
          </div>
          <div className="hub-divider"></div>
          
          <div className="hub-menu-item">
            <Link to="/events" className="hub-link">
              <span className="hub-link-text">EVENTS</span>
              <span className="hub-link-bg">EVENTS</span>
            </Link>
          </div>
          <div className="hub-divider"></div>

          <div className="hub-menu-item">
            <Link to="/about" className="hub-link">
              <span className="hub-link-text">OM OSS</span>
              <span className="hub-link-bg">ABOUT</span>
            </Link>
          </div>
          <div className="hub-divider"></div>

          <div className="hub-menu-item">
            <Link to="/gallery" className="hub-link">
              <span className="hub-link-text">GALLERI</span>
              <span className="hub-link-bg">GALLERY</span>
            </Link>
          </div>
          <div className="hub-divider"></div>

          <div className="hub-menu-item">
            <Link to="/contact" className="hub-link">
              <span className="hub-link-text">KONTAKT</span>
              <span className="hub-link-bg">CONTACT</span>
            </Link>
          </div>
        </nav>

        <div className="hub-socials">
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hub-social-link" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hub-social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hub-social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>

        <div className="hub-footer">
          <span className="hub-enter-text">SELECT TO ENTER DISTRICT 8</span>
          <div className="hub-scroll-indicator"></div>
        </div>
      </div>
    </div>
  );
}
