export default function SiteFooter() {
  return (
    <>
      <div className="footer-marquee">
        <div className="marquee-content">
          <span>
            DISTRICT EIGHT <span className="star">★</span> 第八区{" "}
            <span className="star">★</span> DISTRICT EIGHT{" "}
            <span className="star">★</span> 第八区{" "}
            <span className="star">★</span>
          </span>
          <span>
            DISTRICT EIGHT <span className="star">★</span> 第八区{" "}
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
              <span className="brand-sub">EST. 第八区</span>
            </div>
            <p className="footer-desc">
              Asien-inspirerad nattlivskultur. Vi bygger nätter du inte glömmer —
              neon, bass, dim sum, och människor som vågar.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>NAVIGERA</h4>
              <a href="#home">Hem</a>
              <a href="#events">Events</a>
              <a href="#about">Om oss</a>
              <a href="#">Galleri</a>
              <a href="#">Kontakt</a>
            </div>
            <div className="link-group">
              <h4>FÖLJ OSS</h4>
              <a href="#">Instagram / @district8</a>
              <a href="#">TikTok / @district8</a>
              <a href="#">hello@district8.se</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DISTRICT EIGHT — ALL RIGHTS RESERVED</p>
          <p>MADE WITH SMOKE &amp; BASS</p>
        </div>
      </footer>
    </>
  );
}
