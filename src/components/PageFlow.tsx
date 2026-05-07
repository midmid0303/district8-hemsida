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
            <span>第八区 / ISSUE 014</span>
          </div>

          <div className="hero-title-stack">
            <span className="title-eighth">EIGHTH</span>
            <div className="title-main-col">
              <h1 className="title-enter">ENTER THE</h1>
              <span className="title-district">DISTRICT</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="#events" className="btn-ticket-red">
              SÄKRA BILJETT <span className="arrow">→</span>
            </a>
            <a href="#about" className="btn-manifest">
              VÅRT MANIFEST
            </a>
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
              BILJETTER LIVE NU ● 第八区 · THE 8TH DISTRICT ● NÄSTA DROP ·
              23.05.26 · TRÄDGÅRDEN ● BILJETTER LIVE NU ● 第八区 · THE 8TH
              DISTRICT ●
            </span>
            <span>
              BILJETTER LIVE NU ● 第八区 · THE 8TH DISTRICT ● NÄSTA DROP ·
              23.05.26 · TRÄDGÅRDEN ● BILJETTER LIVE NU ● 第八区 · THE 8TH
              DISTRICT ●
            </span>
          </div>
        </div>
      </section>

      {/* 01 / MANIFEST */}
      <section className="manifest" id="about">
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
              <h2 className="events-title">NÄSTA DROP</h2>
              <div className="section-meta" style={{ marginTop: "-20px" }}>
                02 / UPCOMING
              </div>
            </div>
            <a href="#" className="alla-events">
              ALLA EVENTS <span className="arrow">→</span>
            </a>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event1.jpg" alt="Huvudevent" />
                <div className="card-tag">■ HUVUDEVENT</div>
                <div className="card-idx">/ 001</div>
              </div>
            </div>
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event2.jpg" alt="Pop-up" />
                <div className="card-tag">■ POP-UP</div>
                <div className="card-idx">/ 002</div>
              </div>
            </div>
            <div className="event-card">
              <div className="card-img-wrap">
                <img src="/event3.jpg" alt="Secret" />
                <div className="card-tag">■ SECRET</div>
                <div className="card-idx">/ 003</div>
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
