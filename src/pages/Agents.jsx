import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Agents.jsx";

/* ---------------------------- Icon components ---------------------------- */

const IconHouse = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.7 2.2 4.5 5.4 3.9c2-.4 3.9.5 5 2.2 1.1-1.7 3-2.6 5-2.2 3.2.6 4.8 3.8 3.2 7.3-2.3 4.7-9.8 9.3-9.8 9.3v0z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChevronDown = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-6.3 7-11.5C19 5.9 15.9 3 12 3S5 5.9 5 9.5C5 14.7 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z" fill="currentColor" />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.5 10.5v6M7.5 7.8v.01M11.5 16.5v-3.5c0-1.2 1-2 2.2-2 1.2 0 1.8.8 1.8 2v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */

const LOCATIONS = ["All Locations", "Lagos", "Abuja", "Port Harcourt", "Ibadan"];

// Unsplash — free to use, no attribution required (Unsplash License)
const AGENTS = [
  {
    name: "Emmanuel Okafor",
    role: "Property Agent",
    location: "Lagos",
    phone: "+234 801 234 5678",
    photo: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=300&h=300&q=70",
  },
  {
    name: "Ngozi Eze",
    role: "Property Agent",
    location: "Abuja",
    phone: "+234 803 456 7890",
    photo: "https://images.unsplash.com/photo-1573496527892-904f897eb744?auto=format&fit=crop&w=300&h=300&q=70",
  },
  {
    name: "Bello Musa",
    role: "Property Agent",
    location: "Port Harcourt",
    phone: "+234 706 123 4567",
    photo: "https://images.unsplash.com/photo-1742518424481-b39a7cb4c80e?auto=format&fit=crop&w=300&h=300&q=70",
  },
  {
    name: "Tolu Adeyemi",
    role: "Property Agent",
    location: "Ibadan",
    phone: "+234 802 987 6543",
    photo: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=300&h=300&q=70",
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1742518424481-b39a7cb4c80e?auto=format&fit=crop&w=1200&q=70";

export default function Agents() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerLocation = useLocation();

  const isActive = (path) =>
    path === "/" ? routerLocation.pathname === "/" : routerLocation.pathname.startsWith(path);

  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const visibleAgents = useMemo(() => {
    return AGENTS.filter((agent) => {
      const matchesQuery =
        query.trim() === "" ||
        agent.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        agent.location.toLowerCase().includes(query.trim().toLowerCase());
      const matchesLocation = locationFilter === "All Locations" || agent.location === locationFilter;
      return matchesQuery && matchesLocation;
    });
  }, [query, locationFilter]);

  return (
    <div className="hv-page">
      {/* ----------------------------- Navbar ----------------------------- */}
      <header className={`hv-nav ${scrolled ? "hv-nav--scrolled" : ""}`}>
        <div className="hv-nav__inner">
          <Link to="/" className="hv-logo">
            <span className="hv-logo__mark" aria-hidden="true">
              <IconHouse width="20" height="20" />
            </span>
            <span className="hv-logo__text">Haven</span>
          </Link>

          <nav className="hv-nav__links" aria-label="Primary">
            <Link to="/" className={`hv-nav__link${isActive("/") ? " is-active" : ""}`}>Home</Link>
            <Link to="/properties" className={`hv-nav__link${isActive("/properties") ? " is-active" : ""}`}>Properties</Link>
            <Link to="/agents" className={`hv-nav__link${isActive("/agents") ? " is-active" : ""}`}>Agents</Link>
            <Link to="/about" className={`hv-nav__link${isActive("/about") ? " is-active" : ""}`}>About</Link>
            <Link to="/contact" className={`hv-nav__link${isActive("/contact") ? " is-active" : ""}`}>Contact</Link>
          </nav>

          <div className="hv-nav__actions">
            <button className="hv-icon-btn" aria-label="Saved properties">
              <IconHeart width="18" height="18" />
            </button>
            <Link to="/sign-in" className="hv-btn hv-btn--outline hv-btn--sm">
              Sign In
            </Link>
            <button className="hv-menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <IconMenu width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------- Mobile menu -------------------------- */}
      <div className={`hv-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="hv-mobile-menu__header">
          <span className="hv-logo__text hv-logo__text--dark">Haven</span>
          <button className="hv-icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <IconClose width="22" height="22" />
          </button>
        </div>
        <nav className="hv-mobile-menu__links" aria-label="Mobile">
          <Link to="/" className={isActive("/") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/properties" className={isActive("/properties") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Properties</Link>
          <Link to="/agents" className={isActive("/agents") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Agents</Link>
          <Link to="/about" className={isActive("/about") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className={isActive("/contact") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <Link to="/sign-in" className="hv-btn hv-btn--primary hv-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Sign In
        </Link>
      </div>
      <button
        className={`hv-mobile-scrim ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* ----------------------------- Page header ----------------------------- */}
      <section className="hv-page-header">
        <img className="hv-page-header__bg" src={HEADER_IMAGE} alt="A Haven property agent" />
        <div className="hv-page-header__scrim" />
        <div className="hv-page-header__inner">
          <h1>Our Trusted Agents</h1>
          <p>Work with experienced and professional real estate agents who are committed to helping you find the perfect property.</p>
        </div>
      </section>

      {/* ------------------------------- Directory ------------------------------- */}
      <section className="hv-directory">
        <div className="hv-container">
          <div className="hv-directory__controls">
            <div className="hv-directory__search">
              <IconSearch width="16" height="16" />
              <input
                type="text"
                placeholder="Search agents by name or location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search agents by name or location"
              />
            </div>
            <div className="hv-directory__select">
              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} aria-label="Filter by location">
                {LOCATIONS.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
              <IconChevronDown width="14" height="14" />
            </div>
          </div>

          {visibleAgents.length === 0 && (
            <p className="hv-directory__empty">No agents match your search yet — try a different name or location.</p>
          )}

          <div className="hv-directory__grid">
            {visibleAgents.map((agent) => (
              <article className="hv-agent-card" key={agent.name}>
                <div className="hv-agent-card__photo">
                  <img src={agent.photo} alt={agent.name} />
                </div>
                <h3>{agent.name}</h3>
                <p className="hv-agent-card__role">{agent.role}</p>
                <p className="hv-agent-card__location">{agent.location}</p>
                <p className="hv-agent-card__phone">
                  <IconPhone width="14" height="14" /> {agent.phone}
                </p>
                <Link to="/agents" className="hv-btn hv-btn--outline-dark hv-agent-card__btn">
                  View Profile
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- Footer -------------------------------- */}
      <footer className="hv-footer">
        <div className="hv-container hv-footer__grid">
          <div className="hv-footer__brand">
            <Link to="/" className="hv-logo">
              <span className="hv-logo__mark" aria-hidden="true">
                <IconHouse width="20" height="20" />
              </span>
              <span className="hv-logo__text">Haven</span>
            </Link>
            <p>Helping you find a place to call home, without the stress.</p>
          </div>

          <div className="hv-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/agents">Agents</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="hv-footer__col">
            <h4>Property Types</h4>
            <ul>
              <li><Link to="/properties">Houses</Link></li>
              <li><Link to="/properties">Apartments</Link></li>
              <li><Link to="/properties">Land</Link></li>
              <li><Link to="/properties">Commercial</Link></li>
            </ul>
          </div>

          <div className="hv-footer__col hv-footer__contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <IconPhone width="16" height="16" /> <span>+234 801 234 5678</span>
              </li>
              <li>
                <IconMail width="16" height="16" /> <span>info@haven.ng</span>
              </li>
              <li>
                <IconPin width="16" height="16" /> <span>Lekki Phase 1, Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="hv-footer__social">
              <Link to="/" aria-label="Facebook"><IconFacebook width="16" height="16" /></Link>
              <Link to="/" aria-label="X"><IconX width="16" height="16" /></Link>
              <Link to="/" aria-label="Instagram"><IconInstagram width="16" height="16" /></Link>
              <Link to="/" aria-label="LinkedIn"><IconLinkedin width="16" height="16" /></Link>
            </div>
          </div>
        </div>

        <div className="hv-container hv-footer__bottom">
          <p>© 2025 Haven. All rights reserved.</p>
          <div className="hv-footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}