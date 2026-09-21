import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

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

const IconTag = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5a1.5 1.5 0 0 0 .44 1.06l9 9a1.5 1.5 0 0 0 2.12 0l6.5-6.5a1.5 1.5 0 0 0 0-2.12l-9-9a1.5 1.5 0 0 0-1.06-.44z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="1.3" fill="currentColor" />
  </svg>
);

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

/* trust badge icons */
const IconUserCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="10" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 19c.9-3 3-4.6 6-4.6s5.1 1.6 6 4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 9l1.5 1.5L21 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGrid = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconHeadset = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <rect x="17" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M19 19v.5a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* footer icons */
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

const TRUST_BADGES = [
  { icon: IconUserCheck, title: "Trusted Agents", text: "Verified & professional" },
  { icon: IconShield, title: "Secure Transactions", text: "Your safety matters" },
  { icon: IconGrid, title: "Wide Selection", text: "Homes for every budget" },
  { icon: IconHeadset, title: "24/7 Support", text: "We're always here" },
];

// Unsplash — free to use, no attribution required (Unsplash License)
const FEATURED_PROPERTIES = [
  {
    title: "Luxury 5 Bedroom Duplex",
    status: "For Sale",
    location: "Lekki Phase 1, Lagos",
    price: "₦350,000,000",
    beds: 5,
    baths: 5,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "3 Bedroom Apartment",
    status: "For Sale",
    location: "Ikoyi, Lagos",
    price: "₦120,000,000",
    beds: 3,
    baths: 3,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1706808849803-f61304e024ab?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "2 Bedroom Flat",
    status: "For Rent",
    location: "Victoria Island, Lagos",
    price: "₦2,500,000 / year",
    beds: 2,
    baths: 2,
    sqft: "1,500",
    image: "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "4 Bedroom Terrace Duplex",
    status: "For Sale",
    location: "Chevron, Lagos",
    price: "₦180,000,000",
    beds: 4,
    baths: 2,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?auto=format&fit=crop&w=500&h=380&q=70",
  },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?auto=format&fit=crop&w=1600&q=70";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

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

      {/* --------------------------------- Hero --------------------------------- */}
      <section className="hv-hero">
        <img className="hv-hero__bg" src={HERO_IMAGE} alt="Modern luxury home with a pool at dusk" />
        <div className="hv-hero__scrim" />
        <div className="hv-hero__inner">
          <p className="hv-hero__eyebrow hv-anim hv-anim--1">
            <IconHouse width="14" height="14" /> Find Your Next Home
          </p>
          <h1 className="hv-hero__title hv-anim hv-anim--2">
            Discover the Perfect Property for Your <span className="hv-hero__accent">Lifestyle</span>
          </h1>
          <p className="hv-hero__text hv-anim hv-anim--3">
            Browse through our curated selection of premium properties in the best locations. Buy, rent, or invest
            with confidence.
          </p>

          <div className="hv-search hv-anim hv-anim--4">
            <div className="hv-search__field">
              <IconPin width="16" height="16" />
              <div>
                <span className="hv-search__label">Location</span>
                <span className="hv-search__value">Lagos, Nigeria</span>
              </div>
            </div>
            <div className="hv-search__divider" />
            <div className="hv-search__field">
              <IconHouse width="16" height="16" />
              <div>
                <span className="hv-search__label">Property Type</span>
                <span className="hv-search__value">Any Type</span>
              </div>
            </div>
            <div className="hv-search__divider" />
            <div className="hv-search__field">
              <IconTag width="16" height="16" />
              <div>
                <span className="hv-search__label">Price Range</span>
                <span className="hv-search__value">Any Price</span>
              </div>
            </div>
            <Link to="/properties" className="hv-btn hv-btn--primary hv-search__btn">
              <IconSearch width="16" height="16" /> Search
            </Link>
          </div>

          <div className="hv-trust hv-anim hv-anim--5">
            {TRUST_BADGES.map(({ icon: Icon, title, text }) => (
              <div className="hv-trust__item" key={title}>
                <span className="hv-trust__icon">
                  <Icon width="18" height="18" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Featured ------------------------------ */}
      <section className="hv-featured">
        <div className="hv-container">
          <div className="hv-featured__head">
            <div>
              <h2>Featured Properties</h2>
              <p>Handpicked properties, just for you.</p>
            </div>
            <Link to="/properties" className="hv-link-arrow">
              View All Properties <IconArrowRight width="14" height="14" />
            </Link>
          </div>

          <div className="hv-featured__grid">
            {FEATURED_PROPERTIES.map((property) => (
              <article className="hv-property-card" key={property.title}>
                <div className="hv-property-card__image">
                  <span className={`hv-badge ${property.status === "For Rent" ? "hv-badge--rent" : ""}`}>
                    {property.status}
                  </span>
                  <button className="hv-property-card__fav" aria-label="Save property">
                    <IconHeart width="16" height="16" />
                  </button>
                  <img src={property.image} alt={property.title} />
                </div>
                <div className="hv-property-card__body">
                  <h3>{property.title}</h3>
                  <p className="hv-property-card__location">
                    <IconPin width="13" height="13" /> {property.location}
                  </p>
                  <p className="hv-property-card__price">{property.price}</p>
                  <div className="hv-property-card__meta">
                    <span><IconBed width="14" height="14" /> {property.beds}</span>
                    <span><IconBath width="14" height="14" /> {property.baths}</span>
                    <span><IconRuler width="14" height="14" /> {property.sqft} sqft</span>
                  </div>
                </div>
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