import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { getPropertyById, PROPERTIES } from "../data/properties";
import "./propertyDetail.css";

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

const IconArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShare = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const IconBed = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18v2M21 18v2M3 12V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 10h5a2 2 0 0 1 2 2v0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconBath = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 12V6.5a1.5 1.5 0 0 1 2.6-1l1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12h18v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 18v2M16 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconRuler = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="8" width="18" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 8v3M11 8v2M15 8v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 9.5h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const MAP_EMBED_SRC = (location) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(location)}&z=14&output=embed`;

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = getPropertyById(id);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const routerLocation = useLocation();

  const isActive = (path) =>
    path === "/" ? routerLocation.pathname === "/" : routerLocation.pathname.startsWith(path);

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

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="hv-page">
        <div className="hv-container hv-not-found">
          <h1>Property not found</h1>
          <p>This listing may have been removed or the link is incorrect.</p>
          <Link to="/properties" className="hv-btn hv-btn--primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const extraPhotoCount = property.gallery.length > 4 ? property.gallery.length - 3 : 0;
  const [featuresLeft, featuresRight] = [
    property.features.slice(0, Math.ceil(property.features.length / 2)),
    property.features.slice(Math.ceil(property.features.length / 2)),
  ];

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

      {/* ------------------------------- Content ------------------------------- */}
      <section className="hv-detail">
        <div className="hv-container">
          <div className="hv-detail__topbar">
            <button className="hv-back-link" onClick={() => navigate(-1)}>
              <IconArrowLeft width="16" height="16" /> Back to properties
            </button>
            <div className="hv-detail__topbar-actions">
              <button className="hv-icon-btn hv-icon-btn--light" aria-label="Share property">
                <IconShare width="17" height="17" />
              </button>
              <button className="hv-icon-btn hv-icon-btn--light" aria-label="Save property">
                <IconHeart width="17" height="17" />
              </button>
            </div>
          </div>

          {/* -------------------------------- Gallery -------------------------------- */}
          <div className="hv-gallery">
            <div className="hv-gallery__main">
              <img src={property.gallery[activeImage]} alt={property.title} />
            </div>
            <div className="hv-gallery__thumbs">
              {property.gallery.slice(1, 4).map((src, i) => {
                const isLast = i === 2 && extraPhotoCount > 0;
                return (
                  <button
                    key={src}
                    className="hv-gallery__thumb"
                    onClick={() => setActiveImage(i + 1)}
                  >
                    <img src={src} alt={`${property.title} view ${i + 2}`} />
                    {isLast && <span className="hv-gallery__more">+{extraPhotoCount}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --------------------------------- Body --------------------------------- */}
          <div className="hv-detail__grid">
            <div className="hv-detail__main">
              <div className="hv-detail__heading">
                <h1>{property.title}</h1>
                <span className={`hv-badge ${property.status === "For Rent" ? "hv-badge--rent" : ""}`}>
                  {property.status}
                </span>
              </div>
              <p className="hv-detail__location">
                <IconPin width="14" height="14" /> {property.location}
              </p>

              <div className="hv-detail__price-row">
                <span className="hv-detail__price">{property.price}</span>
                <span className="hv-detail__meta">
                  <span><IconBed width="15" height="15" /> {property.beds} Beds</span>
                  <span><IconBath width="15" height="15" /> {property.baths} Baths</span>
                  <span><IconRuler width="15" height="15" /> {property.sqft} sqft</span>
                </span>
              </div>

              <p className="hv-detail__description">{property.description}</p>

              <div className="hv-detail__features">
                <h2>Property Features</h2>
                <div className="hv-features__grid">
                  <ul>
                    {featuresLeft.map((f) => (
                      <li key={f}>
                        <IconCheck width="15" height="15" /> {f}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {featuresRight.map((f) => (
                      <li key={f}>
                        <IconCheck width="15" height="15" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* -------------------------------- Sidebar -------------------------------- */}
            <aside className="hv-detail__sidebar">
              <div className="hv-agent-card">
                <h3>Interested in this property?</h3>
                <p>Get in touch with the agent for more details or to schedule a viewing.</p>

                <div className="hv-agent-card__profile">
                  <img src={property.agent.photo} alt={property.agent.name} />
                  <div>
                    <strong>{property.agent.name}</strong>
                    <span>{property.agent.role}</span>
                  </div>
                </div>

                <ul className="hv-agent-card__contact">
                  <li>
                    <IconPhone width="14" height="14" /> {property.agent.phone}
                  </li>
                  <li>
                    <IconMail width="14" height="14" /> {property.agent.email}
                  </li>
                </ul>

                <a href={`tel:${property.agent.phone.replace(/\s/g, "")}`} className="hv-btn hv-btn--primary hv-agent-card__btn">
                  <IconSearch width="15" height="15" /> Contact Agent
                </a>
                <Link to="/contact" className="hv-btn hv-btn--outline-dark hv-agent-card__btn">
                  <IconCalendar width="15" height="15" /> Schedule Viewing
                </Link>
              </div>

              <div className="hv-map-card">
                <div className="hv-map-card__frame">
                  <iframe
                    title="Property location"
                    src={MAP_EMBED_SRC(property.location)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="hv-map-card__body">
                  <span>{property.location}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* ---------------------------- Similar properties --------------------------- */}
          <div className="hv-similar">
            <h2>Similar Properties</h2>
            <div className="hv-similar__grid">
              {PROPERTIES.filter((p) => p.id !== property.id && p.type === property.type)
                .slice(0, 3)
                .map((p) => (
                  <Link to={`/properties/${p.id}`} className="hv-property-card" key={p.id}>
                    <div className="hv-property-card__image">
                      <span className={`hv-badge ${p.status === "For Rent" ? "hv-badge--rent" : ""}`}>
                        {p.status}
                      </span>
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div className="hv-property-card__body">
                      <h3>{p.title}</h3>
                      <p className="hv-property-card__location">
                        <IconPin width="13" height="13" /> {p.location}
                      </p>
                      <p className="hv-property-card__price">{p.price}</p>
                      <div className="hv-property-card__meta">
                        <span><IconBed width="14" height="14" /> {p.beds}</span>
                        <span><IconBath width="14" height="14" /> {p.baths}</span>
                        <span><IconRuler width="14" height="14" /> {p.sqft} sqft</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
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