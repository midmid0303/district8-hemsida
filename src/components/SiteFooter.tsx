import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
  return (
    <>
      <div className="footer-marquee">
        <div className="marquee-content">
          <span>
            DISTRICT EIGHT <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span>
          </span>
          <span>
            DISTRICT EIGHT <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span>
          </span>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-name">DISTRICT 8</span>
              <span className="brand-sub">第八区 · EST.MMXXV</span>
            </div>
            <p className="footer-desc">
              Asien-inspirerad nattlivskultur. Vi bygger nätter du inte glömmer —
              neon, bass, dim sum, och människor som vågar.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>NAVIGERA</h4>
              <Link to="/">Hem</Link>
              <Link to="/events">Events</Link>
              <Link to="/about">Om oss</Link>
              <Link to="/gallery">Galleri</Link>
              <Link to="/contact">Kontakt</Link>
            </div>
            <div className="link-group">
              <h4>FÖLJ OSS</h4>
              <div className="footer-social-grid">
                <a href="https://instagram.com/district8" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <span>@district8</span>
                </a>
                <a href="https://tiktok.com/@district8" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                  </div>
                  <span>@district8</span>
                </a>
                <a href="https://facebook.com/district8" target="_blank" rel="noopener noreferrer" className="footer-social-item">
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </div>
                  <span>@district8</span>
                </a>
              </div>
              <a href="mailto:hello@district8.se" className="footer-email-link">hello@district8.se</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DISTRICT EIGHT — ALL RIGHTS RESERVED</p>
          <p>FROM THE PEOPLE FOR THE PEOPLE</p>
        </div>
      </footer>
    </>
  );
}
