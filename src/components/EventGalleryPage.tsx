import { useParams, Link } from "@tanstack/react-router";
import { events } from "./GalleryPage";
import { useEffect, useState } from "react";

// Mock photo data for events
const eventPhotos: Record<string, string[]> = {
  "lunar-new-year": [
    "/event-photos/lunar-1.png",
    "/event-photos/lunar-2.png",
    "/event-photos/lunar-3.png",
    "/event-photos/lunar-4.png",
    "/lunar-new-year-cover.png",
  ],
  "summer-nights": [
    "/event-photos/summer-1.png",
    "/summer-nights-cover.png",
    "/event-photos/summer-1.png",
  ],
  "district-8-opening": [
    "/event-photos/opening-1.png",
    "/district-8-opening-cover.png",
    "/event-photos/opening-1.png",
  ],
  "halloween-event": [
    "/event-photos/halloween-1.png",
    "/halloween-event-cover.png",
    "/event-photos/halloween-1.png",
  ],
  "rooftop-sessions": [
    "/event-photos/rooftop-1.png",
    "/rooftop_sessions_cover.png",
    "/event-photos/rooftop-1.png",
  ],
};

export default function EventGalleryPage() {
  const { eventId } = useParams({ from: "/gallery/$eventId" });
  const event = events.find((e) => e.id === eventId);
  const photos = eventPhotos[eventId] || [];
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | District 8 Galleri`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `Se bilderna från ${event.title} på District 8. Upplev nattens magi igen.`);
    }
  }, [event]);

  if (!event) return <div className="p-20 text-center">Event hittades inte.</div>;

  return (
    <main className="event-gallery-page">
      <section className="event-hero">
        <div className="event-hero-bg">
          <img src={event.cover} alt={event.title} className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <Link to="/gallery" className="back-link">← TILLBAKA TILL GALLERI</Link>
          <div className="event-meta-wrap">
            <span className="event-date-label">{event.date}</span>
            <h1 className="event-page-title">{event.title}</h1>
          </div>
        </div>
      </section>

      <section className="photo-grid-section">
        <div className="container">
          <div className="masonry-grid">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="photo-card" 
                onClick={() => setSelectedPhoto(photo)}
              >
                <img src={photo} alt={`${event.title} photo ${index + 1}`} loading="lazy" />
                <div className="photo-hover">
                  <span>VISA FULLSKÄRM</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content">
            <img src={selectedPhoto} alt="Fullscreen" />
            <button className="close-lightbox">✕</button>
          </div>
        </div>
      )}

      <section className="gallery-footer">
        <div className="container">
          <div className="footer-nav">
            <Link to="/gallery" className="btn-outline">FLER EVENT</Link>
            <a href="#events" className="btn-red">KÖP BILJETT TILL NÄSTA DROP</a>
          </div>
        </div>
      </section>
    </main>
  );
}
