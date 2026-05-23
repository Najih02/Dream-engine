import { NAV_LINKS } from '../config.js';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <a className="footer-brand" href="#home" aria-label="Dream Engine home">
            Dream Engine
          </a>
          <p>We Run the Dreams — Where Precision Meets Imagination</p>
        </div>
        <div>
          <h2>MENU</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} aria-label={`Go to ${link.label}`}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2>GET IN TOUCH</h2>
          <div className="footer-links">
            <a href="mailto:studios.dreamengine@gmail.com" aria-label="Email Dream Engine">
              studios.dreamengine@gmail.com
            </a>
            <a href="tel:+916282979569" aria-label="Call Dream Engine">
              +91 6282 979 569
            </a>
            <a href="tel:+919207061851" aria-label="Call Dream Engine alternate number">
              +91 9207 061 851
            </a>
            <a href="tel:+918590649946" aria-label="Call Dream Engine alternate number two">
              +91 8590 649 946
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dream Engine. All rights reserved.</span>
        <span>Kerala, India</span>
      </div>
    </footer>
  );
}

export default Footer;
