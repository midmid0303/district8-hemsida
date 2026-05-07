import { useEffect, useState, useRef } from "react";
import { Lock, Unlock, Clock, ArrowRight, Share2, Info, ChevronRight, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface EventItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  color: string;
  locked: boolean;
  hint?: string;
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pastEvents: EventItem[] = [
    { id: "lunar-25", title: "LUNAR NEW YEAR", date: "FEB 2025", image: "https://images.unsplash.com/photo-1514525253344-76240003a5e8?auto=format&fit=crop&q=80", category: "KICKOFF", color: "#FF0000", locked: false },
    { id: "songkran-25", title: "SONGKRAN NEON", date: "APR 2025", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80", category: "FESTIVAL", color: "#00FFF0", locked: false },
    { id: "white-25", title: "WHITE PARTY", date: "JUN 2025", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", category: "PREMIUM", color: "#FFFFFF", locked: false },
    { id: "y2k-25", title: "Y2K THEME", date: "AUG 2025", image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80", category: "RETRO", color: "#FF00FF", locked: false },
    { id: "halloween-25", title: "HALLOWEEN", date: "OCT 2025", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80", category: "HORROR", color: "#FF5500", locked: false },
    { id: "lunar-26", title: "LUNAR 2.0", date: "FEB 2026", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", category: "ANNUAL", color: "#FF0000", locked: false },
    { id: "songkran-26", title: "SONGKRAN REBORN", date: "APR 2026", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80", category: "FESTIVAL", color: "#00FFF0", locked: false },
  ];

  const upcomingEvents: EventItem[] = [
    { id: "pool-26", title: "POOL PARTY", date: "JUL 2026", image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80", category: "SUMMER", color: "#0088FF", locked: true, hint: "WATERSIDE VIBES" },
    { id: "halloween-26", title: "HALLOWEEN NIGHT", date: "OCT 2026", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80", category: "HORROR", color: "#FF5500", locked: true, hint: "DARKNESS RETURNS" },
  ];

  useEffect(() => {
    document.title = "Events | District 8";
    window.scrollTo(0, 0);

    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className="events-world">
      {/* Immersive Background */}
      <div className="world-ambient">
        <div className="ambient-fog"></div>
        <div className="ambient-glow"></div>
        <div className="ambient-particles"></div>
      </div>

      <header className="events-hero">
        <div className="hero-content">
          <span className="hero-tag reveal-text">UPCOMING EXPERIENCES</span>
          <h1 className="hero-title reveal-text">THE CALENDAR</h1>
          <div className="hero-divider"></div>

          {/* Next Event Highlights - 3 Column Layout */}
          <div className="next-events-wrap reveal-item">
            <span className="teaser-label">UPCOMING</span>

            <div className="teaser-grid">
              {/* Left Locked */}
              <div className="teaser-card side locked">
                <div className="teaser-blur-bg">
                  <img src={upcomingEvents[1].image} alt="Locked" />
                </div>
                <div className="teaser-lock">
                  <Lock size={16} />
                </div>
              </div>

              {/* Center Main */}
              <div className="teaser-card main">
                <div className="teaser-blur-bg">
                  <img src={upcomingEvents[0].image} alt="Teaser" />
                </div>
                <div className="teaser-info">
                  <div className="hype-countdown mini">
                    <Clock size={10} />
                    <span>LOCKED</span>
                  </div>
                  <h2 className="teaser-title">{upcomingEvents[0].hint}</h2>
                  <span className="teaser-date">{upcomingEvents[0].date}</span>
                </div>
              </div>

              {/* Right Locked - Optional or Placeholder */}
              <div className="teaser-card side locked">
                <div className="teaser-blur-bg">
                  <div className="empty-locked-bg"></div>
                </div>
                <div className="teaser-lock">
                  <Lock size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Past Events Scene */}
      <section className="events-scene archive-scene">
        <div className="scene-header container">
          <h2 className="scene-title">THE ARCHIVE</h2>
          <p className="scene-desc">LEGACY MOMENTS. RELIVE THE ENERGY.</p>
        </div>

        <div className="archive-container relative">
          <div className="events-horizontal-wrap" ref={scrollRef}>
            <div className="events-scroll-content">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="event-portal"
                  style={{
                    "--portal-color": event.color,
                    "--index": index
                  } as any}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="portal-frame">
                    <div className="portal-image-wrap">
                      <img src={event.image} alt={event.title} className="portal-img" />
                      <div className="portal-overlay"></div>
                      <div className="holographic-shimmer"></div>
                    </div>
                    <div className="portal-info">
                      <span className="portal-cat">{event.category}</span>
                      <h3 className="portal-title">{event.title}</h3>
                      <div className="portal-bottom">
                        <span className="portal-date">{event.date}</span>
                      </div>
                    </div>
                    <div className="portal-explore">
                      <span>EXPLORE ARCHIVE</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="archive-nav-btn prev"
            onClick={() => scrollRef.current?.scrollBy({ left: -500, behavior: 'smooth' })}
            aria-label="Previous Events"
          >
            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button
            className="archive-nav-btn next"
            onClick={() => scrollRef.current?.scrollBy({ left: 500, behavior: 'smooth' })}
            aria-label="Next Events"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>


      {/* Immersive Event Overlay */}
      {selectedEvent && (
        <div className="event-immersive-overlay active">
          <button className="overlay-close" onClick={() => setSelectedEvent(null)}>
            <X size={32} />
          </button>

          <div className="immersive-bg">
            <img src={selectedEvent.image} alt={selectedEvent.title} />
            <div className="immersive-gradient"></div>
          </div>

          <div className="immersive-content container">
            <div className="immersive-header">
              <span className="immersive-cat" style={{ color: selectedEvent.color }}>{selectedEvent.category}</span>
              <h1 className="immersive-title">{selectedEvent.title}</h1>
              <div className="immersive-meta">
                <span>{selectedEvent.date}</span>
                <span className="meta-dot"></span>
                <span>DISTRICT 8 MAIN STAGE</span>
              </div>
            </div>

            <div className="immersive-body">
              <p className="immersive-desc">
                En oförglömlig kväll fylld av energi, exklusiva drinkar och världsklassig musik. District 8 förvandlades till ett epicentrum av nattlivets magi.
              </p>

              <div className="immersive-actions">
                <button className="action-btn primary">VIEW FULL GALLERY</button>
                <button className="action-btn secondary">
                  <Share2 size={18} />
                  SHARE MOMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* World Footer */}
      <footer className="events-footer">
        <div className="container">
          <div className="footer-hype">
            <h3>DON'T MISS THE NEXT UNLOCK</h3>
            <div className="hype-input-wrap">
              <input type="email" placeholder="JOIN THE VOID" />
              <button>JOIN</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
