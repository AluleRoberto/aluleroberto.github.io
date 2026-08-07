import { BrandLogo } from "./BrandLogo";

const nav = [
  ["Research", "/research"],
  ["Opportunities", "/opportunities"],
  ["Resources", "/resources"],
  ["Biochemical Society", "/biochemical-society"],
  ["CV", "/cv"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a href="/" className="brand-link" aria-label="Alule Robert — home">
          <BrandLogo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="/student-guide">
            Student guide
          </a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a href="/student-guide">Student guide</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandLogo />
          <p className="footer-note">
            Research, teaching resources and practical routes into the biological
            sciences — built from Uganda, connected to the world.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <a href="/research">Research</a>
          <a href="/opportunities">Opportunities</a>
          <a href="/resources">Learning resources</a>
          <a href="/student-guide">Student guide</a>
        </div>
        <div>
          <p className="footer-heading">Connect</p>
          <a href="mailto:contact@alulerobert.me">contact@alulerobert.me</a>
          <a href="https://github.com/robertalule" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/AluleRobert" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/credits">Sources & image credits</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Alule Robert</span>
        <span>Independent educational and research website · Kampala, Uganda</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
