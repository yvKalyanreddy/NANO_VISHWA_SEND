import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import websiteLogo from '../../assets/WebsiteLogo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Our Story', path: '/ourstory' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: 'Enquiry', path: '/enquiry' },
  { label: 'About Us', path: '/aboutus' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo">
          <img src={websiteLogo} alt="Bowls and Bottles" />
        </Link>

        {/* Center Nav Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Buttons */}
        <div className="navbar__auth">
          <Link to="/signin" className="navbar__btn navbar__btn--outline" id="nav-signin">
            Sign In
          </Link>
          <Link to="/subscription" className="navbar__btn navbar__btn--filled" id="nav-subscription">
            Subscription
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
              id={`nav-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar__mobile-auth">
            <Link to="/signin" className="navbar__btn navbar__btn--outline" id="nav-mobile-signin">Sign In</Link>
            <Link to="/subscription" className="navbar__btn navbar__btn--filled" id="nav-mobile-subscription">Subscription</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
