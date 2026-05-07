import { Link } from "@tanstack/react-router";
export default function PageFlow() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="scanlines"></div>
        <div className="hero-bg-overlay"></div>

        <div className="hero-content">
          <div className="hero-meta">
            <span className="line"></span>
          </div>

          <div className="hero-title-stack">
            <h1 className="title-enter">ENTER THE</h1>
            <div className="title-row">
              <span className="title-eighth">DISTRICT</span>
              <span className="title-district">EIGHT</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="#events" className="btn-ticket-red">
              SÄKRA BILJETT <span className="arrow">→</span>
            </a>
            <Link to="/about" className="btn-manifest">
              VÅRT MANIFEST
            </Link>
          </div>

          <p className="hero-subtitle">
            Vi kurerar nätter i skärningspunkten mellan Tokyo, Hongkong, Seoul —
            och
            <br />
            din stad. Bass, bao, neon. Inget för alla. Allt för dig som vet.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">014</span>
              <span className="stat-label">EVENTS / 2026</span>
            </div>
            <div className="stat">
              <span className="stat-num">28K+</span>
              <span className="stat-label">SOULS I NÄTET</span>
            </div>
            <div className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">STÄDER</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">HYPE LEVEL</span>
            </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            <span>
              Nästa drop · 23.05.26 · Trädgården ● 第八区 · THE 8TH DISTRICT ●
              BILJETTER LIVE NU ● Nästa drop · 23.05.26 · Trädgården ●
            </span>
            <span>
              Nästa drop · 23.05.26 · Trädgården ● 第八区 · THE 8TH DISTRICT ●
              BILJETTER LIVE NU ● Nästa drop · 23.05.26 · Trädgården ●
            </span>
          </div>
        </div>
      </section>

      {/* 01 / MANIFEST */}
      <section className="manifest">
        <div className="manifest-container">
          <div className="section-meta">01 / MANIFEST</div>
          <div className="manifest-content">
            <h2 className="massive-title">
              VI BYGGER <span className="outline">INTE FESTER.</span>
              <br />
              <span className="outline">VI BYGGER</span> RYKTEN.
            </h2>
            <div className="manifest-grid">
              <div className="manifest-col">
                <p>
                  District 8 är inte en klubb. Det är en frekvens. Födda ur
                  Tokyos basement, Hongkongs gränder och Seoul&apos;s neonblöta
                  gator — översatta för Skandinavien.
                </p>
              </div>
              <div className="manifest-col">
                <p>
                  Varje event är ett rum byggt från noll. Egen mat, egen ljud,
                  egen estetik. Ingenting är generic. Allt är intent. När du går
                  in i District 8 lämnar du staden bakom dig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / UPCOMING */}
      <section className="events" id="events">
        <div className="events-container">
          <div className="events-header">
            <div className="header-left">
              <div className="section-meta">
                02 / UPCOMING
              </div>
              <h2 className="events-title">NÄSTA DROP</h2>
            </div>
            <a href="#" className="alla-events">
              ALLA EVENTS <span className="arrow">→</span>
            </a>
          </div>

          <div className="events-grid">
            {/* Event Card 1 - NEON DRAGON */}
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event1.png" alt="Neon Dragon" />
                <div className="card-tag">■ HUVUDEVENT</div>
                <div className="card-idx">/ 001</div>
              </div>
              <div className="card-info">
                <h3 className="card-name">NEON DRAGON</h3>
                <div className="card-details">
                  <span className="card-venue">Trädgården, Stockholm</span>
                  <span className="card-date">23 MAJ 2026</span>
                </div>
                <div className="card-bottom">
                  <span className="card-price">FROM 349 SEK</span>
                  <a href="#" className="card-btn">BILJETTER →</a>
                </div>
              </div>
            </div>

            {/* Event Card 2 - BAO & BASS */}
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event2.png" alt="Bao & Bass" />
                <div className="card-tag">■ POP-UP</div>
                <div className="card-idx">/ 002</div>
              </div>
              <div className="card-info">
                <h3 className="card-name">BAO &amp; BASS</h3>
                <div className="card-details">
                  <span className="card-venue">Pustervik, Göteborg</span>
                  <span className="card-date">14 JUN 2026</span>
                </div>
                <div className="card-bottom">
                  <span className="card-price">FROM 249 SEK</span>
                  <a href="#" className="card-btn">BILJETTER →</a>
                </div>
              </div>
            </div>

            {/* Event Card 3 - GEISHA RIOT */}
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event3.png" alt="Geisha Riot" />
                <div className="card-tag">■ SECRET</div>
                <div className="card-idx">/ 003</div>
              </div>
              <div className="card-info">
                <h3 className="card-name">GEISHA RIOT</h3>
                <div className="card-details">
                  <span className="card-venue">Hemlig adress</span>
                  <span className="card-date">TBA</span>
                </div>
                <div className="card-bottom">
                  <span className="card-price">INVITE ONLY</span>
                  <a href="#" className="card-btn">NOTIFY ME →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="statement-section">
        <div className="statement-container">
          <h2 className="statement-title">
            DRINK.
            <br />
            <span className="red">DANCE.</span>
            <br />
            <span className="outline">DISAPPEAR.</span>
          </h2>
          <div className="statement-footer">
            <a href="#" className="btn-join">
              BLI EN AV OSS <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
