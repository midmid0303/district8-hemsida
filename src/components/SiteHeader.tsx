import { Link } from "@tanstack/react-router";

export default function SiteHeader() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="brand-link">
            <div className="brand">
              <span className="brand-name">DISTRICT 8</span>
              <span className="brand-sub">第八区 · EST.MMXXV</span>
            </div>
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/">
            <img src="/logo.png" alt="District Eight" className="nav-dragon-logo" />
          </Link>
        </div>
        <div className="nav-right">
          <nav className="main-nav">
            <Link to="/" activeProps={{ className: "active" }} activeOptions={{ exact: true }}>
              HEM
            </Link>
            <Link to="/events" activeProps={{ className: "active" }}>
              EVENTS
            </Link>
            <Link to="/about" activeProps={{ className: "active" }}>
              OM OSS
            </Link>
            <Link to="/gallery" activeProps={{ className: "active" }}>
              GALLERI
            </Link>
            <Link to="/contact" activeProps={{ className: "active" }}>
              KONTAKT
            </Link>
          </nav>
          <Link to="/events" className="btn-nav-ticket">
            KÖP BILJETT
          </Link>
        </div>
      </div>
    </header>
  );
}
