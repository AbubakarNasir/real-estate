import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./properties.css";

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

const IconChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

const LOCATIONS = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Enugu"];
const PROPERTY_TYPES = ["House", "Apartment", "Land", "Commercial"];
const BEDROOM_OPTIONS = ["1+", "2+", "3+", "4+", "5+"];
const SORT_OPTIONS = ["Newest First", "Price: Low to High", "Price: High to Low"];

// Unsplash — free to use, no attribution required (Unsplash License)
const PROPERTIES = [
  {
    title: "Luxury 5 Bedroom Duplex",
    status: "For Sale",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    type: "House",
    price: "₦350,000,000",
    priceValue: 350000000,
    beds: 5,
    baths: 5,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "4 Bedroom Terrace Duplex",
    status: "For Sale",
    location: "Chevron, Lagos",
    city: "Lagos",
    type: "House",
    price: "₦180,000,000",
    priceValue: 180000000,
    beds: 4,
    baths: 4,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "3 Bedroom Apartment",
    status: "For Rent",
    location: "Ikoyi, Lagos",
    city: "Lagos",
    type: "Apartment",
    price: "₦2,000,000 / year",
    priceValue: 2000000,
    beds: 3,
    baths: 3,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1706808849803-f61304e024ab?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "5 Bedroom Detached Duplex",
    status: "For Sale",
    location: "Magodo, Lagos",
    city: "Lagos",
    type: "House",
    price: "₦280,000,000",
    priceValue: 280000000,
    beds: 5,
    baths: 4,
    sqft: "4,000",
    image: "https://images.unsplash.com/photo-1706164971298-7d210902ec42?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "2 Bedroom Apartment",
    status: "For Sale",
    location: "Yaba, Lagos",
    city: "Lagos",
    type: "Apartment",
    price: "₦95,000,000",
    priceValue: 95000000,
    beds: 2,
    baths: 2,
    sqft: "1,400",
    image: "https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?auto=format&fit=crop&w=500&h=380&q=70",
  },
  {
    title: "3 Bedroom Duplex",
    status: "For Rent",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    type: "House",
    price: "₦3,500,000 / year",
    priceValue: 3500000,
    beds: 3,
    baths: 3,
    sqft: "2,800",
    image: "https://images.unsplash.com/photo-1686164748261-33e13eef70b6?auto=format&fit=crop&w=500&h=380&q=70",
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?auto=format&fit=crop&w=1600&q=70";

export default function Properties() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerLocation = useLocation();

  const isActive = (path) =>
    path === "/" ? routerLocation.pathname === "/" : routerLocation.pathname.startsWith(path);

  const [query, setQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState(["Lagos"]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [sortBy, setSortBy] = useState("Newest First");

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

  const toggleValue = (list, setList, value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const minBedroomFilter = useMemo(() => {
    if (selectedBedrooms.length === 0) return 0;
    return Math.min(...selectedBedrooms.map((b) => parseInt(b, 10)));
  }, [selectedBedrooms]);

  const visibleProperties = useMemo(() => {
    let list = PROPERTIES.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        p.location.toLowerCase().includes(query.trim().toLowerCase());
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(p.city);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(p.type);
      const matchesBedrooms = minBedroomFilter === 0 || p.beds >= minBedroomFilter;
      return matchesQuery && matchesLocation && matchesType && matchesBedrooms;
    });

    if (sortBy === "Price: Low to High") {
      list = [...list].sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "Price: High to Low") {
      list = [...list].sort((a, b) => b.priceValue - a.priceValue);
    }
    return list;
  }, [query, selectedLocations, selectedTypes, minBedroomFilter, sortBy]);

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
        <img className="hv-page-header__bg" src={HEADER_IMAGE} alt="Modern residential estate" />
        <div className="hv-page-header__scrim" />
        <div className="hv-page-header__inner">
          <h1>Properties</h1>
          <p>Find your dream home from our wide range of properties.</p>
        </div>
      </section>

      {/* ------------------------------- Search bar ------------------------------- */}
      <section className="hv-filter-bar">
        <div className="hv-container hv-filter-bar__inner">
          <div className="hv-filter-bar__search">
            <IconSearch width="16" height="16" />
            <input
              type="text"
              placeholder="Search by location, keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search by location or keyword"
            />
          </div>

          <div className="hv-filter-bar__select">
            <select
              value={selectedTypes[0] || "All Types"}
              onChange={(e) => setSelectedTypes(e.target.value === "All Types" ? [] : [e.target.value])}
              aria-label="Property type"
            >
              <option>All Types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <IconChevronDown width="14" height="14" />
          </div>

          <div className="hv-filter-bar__select">
            <select aria-label="Price range" defaultValue="Any Price">
              <option>Any Price</option>
              <option>Under ₦50,000,000</option>
              <option>₦50,000,000 – ₦150,000,000</option>
              <option>₦150,000,000 – ₦300,000,000</option>
              <option>Above ₦300,000,000</option>
            </select>
            <IconChevronDown width="14" height="14" />
          </div>

          <div className="hv-filter-bar__select">
            <select
              value={selectedBedrooms[0] || "Any"}
              onChange={(e) => setSelectedBedrooms(e.target.value === "Any" ? [] : [e.target.value])}
              aria-label="Bedrooms"
            >
              <option>Any</option>
              {BEDROOM_OPTIONS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <IconChevronDown width="14" height="14" />
          </div>

          <button className="hv-btn hv-btn--primary hv-filter-bar__btn" type="button">
            <IconSearch width="16" height="16" /> Search
          </button>
        </div>
      </section>

      {/* ------------------------------- Listing -------------------------------- */}
      <section className="hv-listing">
        <div className="hv-container hv-listing__grid">
          {/* ------------------------------- Sidebar ------------------------------- */}
          <aside className="hv-sidebar">
            <div className="hv-sidebar__group">
              <h3>Location</h3>
              <ul>
                {LOCATIONS.map((loc) => (
                  <li key={loc}>
                    <label className="hv-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(loc)}
                        onChange={() => toggleValue(selectedLocations, setSelectedLocations, loc)}
                      />
                      <span className="hv-checkbox__box" />
                      {loc}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hv-sidebar__group">
              <h3>Property Type</h3>
              <ul>
                {PROPERTY_TYPES.map((type) => (
                  <li key={type}>
                    <label className="hv-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleValue(selectedTypes, setSelectedTypes, type)}
                      />
                      <span className="hv-checkbox__box" />
                      {type}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hv-sidebar__group">
              <h3>Price Range</h3>
              <div className="hv-filter-bar__select hv-sidebar__select">
                <select aria-label="Price range" defaultValue="Any Price">
                  <option>Any Price</option>
                  <option>Under ₦50,000,000</option>
                  <option>₦50,000,000 – ₦150,000,000</option>
                  <option>₦150,000,000 – ₦300,000,000</option>
                  <option>Above ₦300,000,000</option>
                </select>
                <IconChevronDown width="14" height="14" />
              </div>
            </div>

            <div className="hv-sidebar__group">
              <h3>Bedrooms</h3>
              <ul>
                {BEDROOM_OPTIONS.map((b) => (
                  <li key={b}>
                    <label className="hv-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedBedrooms.includes(b)}
                        onChange={() => toggleValue(selectedBedrooms, setSelectedBedrooms, b)}
                      />
                      <span className="hv-checkbox__box" />
                      {b}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* -------------------------------- Results -------------------------------- */}
          <div className="hv-results">
            <div className="hv-results__head">
              <p>Showing {visibleProperties.length} properties</p>
              <div className="hv-filter-bar__select hv-results__sort">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort by">
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <IconChevronDown width="14" height="14" />
              </div>
            </div>

            {visibleProperties.length === 0 && (
              <p className="hv-results__empty">No properties match your filters yet — try adjusting them.</p>
            )}

            <div className="hv-results__grid">
              {visibleProperties.map((property) => (
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