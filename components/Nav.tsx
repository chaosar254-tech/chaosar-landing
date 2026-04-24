export default function Nav() {
  return (
    <nav>
      <a href="/" className="logo" aria-label="ChaosAR Ana Sayfa">
        CHAOS<span>AR</span>
      </a>
      <div className="nav-right">
        <a
          href="https://chaosar.com"
          className="site-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Ana Site</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#demo-form" className="nav-cta">
          Ücretsiz Demo
        </a>
      </div>
    </nav>
  );
}
