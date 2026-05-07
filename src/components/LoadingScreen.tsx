import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("INITIALIZING");

  useEffect(() => {
    // Percentage counter animation
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increments for a more "realistic" loading feel
        const next = prev + Math.floor(Math.random() * 4) + 1;
        return next > 100 ? 100 : next;
      });
    }, 40);

    // Status message cycling
    const statuses = [
      "ESTABLISHING UPLINK",
      "CURATING NEON FREQUENCIES",
      "CALIBRATING BASS MODULES",
      "SYNCHRONIZING SOULS",
      "ENTERING DISTRICT 8"
    ];
    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      statusIdx = (statusIdx + 1) % statuses.length;
      setStatus(statuses[statusIdx]);
    }, 600);

    // Final fade out sequence
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-grid"></div>
      <div className="loading-scanlines"></div>
      
      <div className="loading-content">
        <div className="loading-meta">
          <span className="loading-id">D8-PRO-MAX // 2026</span>
          <span className="loading-percent">{counter}%</span>
        </div>

        <div className="loading-logo-container">
          <div className="loading-logo-wrap">
            <img 
              src="/logo.png" 
              alt="District 8" 
              className="loading-logo"
            />
            <div className="logo-glitch-copy"></div>
          </div>
          <div className="loading-glow-orb"></div>
        </div>

        <div className="loading-footer">
          <div className="loading-bar-outer">
            <div 
              className="loading-bar-inner" 
              style={{ width: `${counter}%` }}
            ></div>
          </div>
          <div className="loading-status-wrap">
            <span className="status-dot"></span>
            <div className="loading-status-text">{status}</div>
          </div>
        </div>
      </div>

      <div className="loading-corner-decor tl"></div>
      <div className="loading-corner-decor tr"></div>
      <div className="loading-corner-decor bl"></div>
      <div className="loading-corner-decor br"></div>
    </div>
  );
}
