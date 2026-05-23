import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../config.js';

function Nav({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const goToSection = (event, href) => {
    event.preventDefault();
    closeMenu();

    const target = document.querySelector(href);
    if (!target) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { duration: 1.2 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`site-nav${isScrolled ? ' is-scrolled' : ''}`}>
        <a
          className="nav-logo"
          href="#home"
          aria-label="Dream Engine home"
          onClick={(event) => goToSection(event, '#home')}
        >
          Dream Engine
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={activeSection === link.id ? 'is-active' : ''}
              href={link.href}
              onClick={(event) => goToSection(event, link.href)}
              aria-label={`Go to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu${isMenuOpen ? ' is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <button className="menu-close" type="button" aria-label="Close menu" onClick={closeMenu}>
          x
        </button>
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(event) => goToSection(event, link.href)}
            style={{ transitionDelay: `${index * 80}ms` }}
            aria-label={`Go to ${link.label}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Nav;
