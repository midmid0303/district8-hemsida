import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

export const events = [
  {
    id: "lunar-new-year",
    title: "LUNAR NEW YEAR",
    date: "12 FEB 2026",
    cover: "/lunar-new-year-cover.png",
    description: "En natt av drakar, neon och röd laser.",
  },
  {
    id: "summer-nights",
    title: "SUMMER NIGHTS",
    date: "20 JUL 2025",
    cover: "/summer-nights-cover.png",
    description: "Sommarnätter under stadens ljus.",
  },
  {
    id: "district-8-opening",
    title: "DISTRICT 8 OPENING",
    date: "05 APR 2025",
    cover: "/district-8-opening-cover.png",
    description: "Där allt började. Den industriella revolutionen.",
  },
  {
    id: "halloween-event",
    title: "HALLOWEEN EVENT",
    date: "31 OCT 2025",
    cover: "/halloween-event-cover.png",
    description: "Masker, mysterier och mörker.",
  },
  {
    id: "rooftop-sessions",
    title: "ROOFTOP SESSIONS",
    date: "15 AUG 2025",
    cover: "/rooftop_sessions_cover.png",
    description: "Solnedgångar och bas på hög höjd.",
  },
];

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Galleri | District 8";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Utforska vårt exklusiva arkiv av nätter på District 8. Se bilder från våra största event.");
  }, []);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <div className="section-meta">ARKIV</div>
          <h1 className="massive-title">GALLERI</h1>
          <p className="hero-subtitle">
            Varje natt är ett kapitel. Varje bild är ett bevis. 
            Utforska District 8:s historia genom linsen.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-events-grid">
            {events.map((event) => (
              <Link 
                to="/gallery/$eventId" 
                params={{ eventId: event.id }} 
                key={event.id}
                className="event-gallery-card"
              >
                <div className="event-cover-wrap">
                  <img src={event.cover} alt={event.title} />
                  <div className="event-overlay">
                    <div className="event-info">
                      <span className="event-date">{event.date}</span>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-desc">{event.description}</p>
                      <span className="view-event">VISA GALLERI →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
