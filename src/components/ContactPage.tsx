import { useEffect, useState } from "react";
import { Mail, Calendar, MapPin, Instagram, Facebook, MessageSquare, Copy, Check } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Kontakt | District 8";
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="contact-page">
      {/* Cinematic Background */}
      <div className="contact-bg">
        <div className="contact-bg-overlay"></div>
        <div className="contact-bg-noise"></div>
      </div>

      <section className="contact-hero">
        <div className="container">
          <div className="contact-header-wrap">
            <h1 className="contact-title reveal-text">THE GATEWAY</h1>
            <p className="contact-subtitle reveal-text">Your direct access to the District 8 experience.</p>
          </div>

          <div className="contact-grid">
            {/* VIP Card */}
            <div className="contact-card vip-card reveal-item" style={{ "--delay": "0.2s" } as any}>
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon-wrap">
                  <Calendar className="card-icon" />
                </div>
                <h3>Bordsbokning</h3>
                <p>Säkra din plats på VIP-hyllan för en oförglömlig kväll.</p>
                <a href="mailto:tables@district8.se" className="card-btn">
                  BOKA BORD
                </a>
                <div className="card-footer">
                  <span>tables@district8.se</span>
                  <button onClick={() => copyToClipboard("tables@district8.se", "tables")} className="copy-btn">
                    {copied === "tables" ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="contact-card reveal-item" style={{ "--delay": "0.3s" } as any}>
              <div className="card-content">
                <div className="card-icon-wrap">
                  <Mail className="card-icon" />
                </div>
                <h3>Allmänna Frågor</h3>
                <p>Frågor om evenemang, biljetter eller borttappade föremål.</p>
                <a href="mailto:info@district8.se" className="card-btn secondary">
                  KONTAKTA OSS
                </a>
                <div className="card-footer">
                  <span>info@district8.se</span>
                  <button onClick={() => copyToClipboard("info@district8.se", "info")} className="copy-btn">
                    {copied === "info" ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card reveal-item" style={{ "--delay": "0.4s" } as any}>
              <div className="card-content">
                <div className="card-icon-wrap">
                  <MapPin className="card-icon" />
                </div>
                <h3>Hitta Hit</h3>
                <p>Skeppsbron 12, Stockholm.<br />Hjärtat av Stockholms nattliv.</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="card-btn secondary">
                  VISA KARTA
                </a>
              </div>
            </div>

            {/* Socials Card */}
            <div className="contact-card reveal-item" style={{ "--delay": "0.5s" } as any}>
              <div className="card-content">
                <div className="card-icon-wrap">
                  <MessageSquare className="card-icon" />
                </div>
                <h3>Sociala Medier</h3>
                <p>Följ oss för de senaste uppdateringarna och exklusivt material.</p>
                <div className="social-links-grid">
                  <a href="#" className="social-pill">
                    <Instagram size={16} /> <span>Instagram</span>
                  </a>
                  <a href="#" className="social-pill">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                    <span>TikTok</span>
                  </a>
                  <a href="#" className="social-pill">
                    <Facebook size={16} /> <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="contact-footer-divider">
        <div className="divider-line pulse-glow"></div>
      </div>
    </main>
  );
}
