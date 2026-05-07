export default function SiteHeader() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="brand">
            <span className="brand-name">DISTRICT 8</span>
            <span className="brand-sub">第八区 · EST.MMXXV</span>
          </div>
        </div>
        <div className="nav-center">
          <img src="/logo.png" alt="D8" className="nav-dragon" />
        </div>
        <div className="nav-right">
          <nav className="main-nav">
            <a href="/#home" className="active">
              HEM
            </a>
            <a href="/#events">EVENTS</a>
            <a href="/#about">OM OSS</a>
            <a href="/gallery">GALLERI</a>
            <a href="/contact">KONTAKT</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
