import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="section-meta">EST. 2025 / STOCKHOLM</div>
          <h1 className="massive-title">
            BEYOND <span className="outline">THE NEON.</span>
            <br />
            BEHIND <span className="red">THE BEAT.</span>
          </h1>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-label">OUR STORY / 01</div>
            <div className="story-content">
              <p className="lead">
                District 8 föddes ur en frustration över det förutsägbara. Vi såg en nattklubbsvärld som slutat drömma, där varje rum kändes likadant och varje kväll följde samma manus.
              </p>
              <p>
                Vi ville bygga något annat. En plats där gränserna mellan Tokyo, Hongkong och din stad suddas ut. Där ljudet inte bara hörs, utan känns i varje atom. Där varje skugga bär på en hemlighet och varje neonljus berättar en historia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-item">
              <div className="item-num">01</div>
              <h3>THE MISSION</h3>
              <p>Att kurera upplevelser som inte kan googlas. Vi bygger rum som existerar i nuet, för dem som vågar förlora sig själva.</p>
            </div>
            <div className="mission-item">
              <div className="item-num">02</div>
              <h3>THE VISION</h3>
              <p>Att bli den globala referensen för asiatisk-inspirerad nattlivskultur, där estetik och puls möts utan kompromisser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT EXPERIENCE */}
      <section className="about-experience">
        <div className="experience-bg">
          <img src="/event1.png" alt="Experience" className="bg-img" />
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="experience-content">
            <div className="section-meta">THE EXPERIENCE</div>
            <h2 className="title">TOTAL <span className="red">IMMERSION.</span></h2>
            <div className="feature-list">
              <div className="feature">■ SONIC ARCHITECTURE</div>
              <div className="feature">■ ASIAN STREET GASTRONOMY</div>
              <div className="feature">■ NEON NOIR AESTHETICS</div>
              <div className="feature">■ ANONYMITY BY DESIGN</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / FOUNDER */}
      <section className="about-team">
        <div className="container">
          <div className="section-meta">THE COLLECTIVE</div>
          <h2 className="team-title">THE MINDS <span className="outline">IN THE DARK.</span></h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-img">
                <div className="img-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>X. CHEN</h4>
                <p>CREATIVE DIRECTOR</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-img">
                <div className="img-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>K. LARSSON</h4>
                <p>OPERATIONS & SOUND</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-img">
                <div className="img-placeholder"></div>
              </div>
              <div className="member-info">
                <h4>M. SATO</h4>
                <p>EXPERIENCE DESIGN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">VILL DU <span className="red">UPPLEVA</span> DET SJÄLV?</h2>
            <p>Nästa drop är närmare än du tror. Säkra din plats i nätet.</p>
            <a href="/#events" className="btn-cta-red">SE KOMMANDE EVENTS →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
