import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./contact.css";

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

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* contact detail icons */
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

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 2h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const CONTACT_DETAILS = [
  {
    icon: IconPin,
    title: "Our Location",
    lines: ["Plot 12, Admiralty Way,", "Lekki Phase 1, Lagos, Nigeria"],
  },
  {
    icon: IconPhone,
    title: "Phone",
    lines: ["+234 801 234 5678", "+234 808 765 4321"],
  },
  {
    icon: IconMail,
    title: "Email",
    lines: ["info@haven.ng", "support@haven.ng"],
  },
  {
    icon: IconClock,
    title: "Business Hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat – Sun: 9:00 AM – 4:00 PM"],
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?auto=format&fit=crop&w=1600&q=70";
const MAP_EMBED_SRC = "https://maps.google.com/maps?q=Lekki%20Phase%201%2C%20Lagos%2C%20Nigeria&z=14&output=embed";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your actual form endpoint / email service.
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

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
        <img className="hv-page-header__bg" src={HEADER_IMAGE} alt="Modern residential estate at dusk" />
        <div className="hv-page-header__scrim" />
        <div className="hv-page-header__inner">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message or visit our office for more information.</p>
        </div>
      </section>

      {/* --------------------------------- Content --------------------------------- */}
      <section className="hv-contact">
        <div className="hv-container hv-contact__grid">
          {/* ------------------------------- Get in touch ------------------------------- */}
          <div className="hv-touch">
            <ul className="hv-touch__list">
              {CONTACT_DETAILS.map(({ icon: Icon, title, lines }) => (
                <li key={title}>
                  <span className="hv-touch__icon">
                    <Icon width="18" height="18" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------- Message form -------------------------------- */}
          <div className="hv-message">
            <h2>Send Us a Message</h2>
            <p className="hv-message__intro">Fill out the form below and we'll get back to you soon.</p>

            {submitted && (
              <div className="hv-message__success" role="status">
                <IconCheck width="20" height="20" />
                <span>Thanks — your message has been sent. We'll get back to you soon.</span>
              </div>
            )}

            <form className="hv-form" onSubmit={handleSubmit}>
              <div className="hv-form__field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>

              <div className="hv-form__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <div className="hv-form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                />
              </div>

              <button type="submit" className="hv-btn hv-btn--primary hv-form__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* ----------------------------------- Map ----------------------------------- */}
        <div className="hv-container">
          <div className="hv-map">
            <iframe
              title="Haven office location"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="hv-map__label">
              <span>Lagos, Nigeria</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lekki+Phase+1+Lagos+Nigeria"
                target="_blank"
                rel="noreferrer"
              >
                View Larger Map <IconArrowRight width="13" height="13" />
              </a>
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