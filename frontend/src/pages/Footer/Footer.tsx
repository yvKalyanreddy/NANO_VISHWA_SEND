import { Link } from 'react-router-dom';
import websiteLogo from '../../assets/WebsiteLogo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo">
          <img src={websiteLogo} alt="Bowls and Bottles" />
        </Link>
        <ul className="footer__links">
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/subscription">Subscription</Link></li>
          <li><Link to="/ourstory">Our Story</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Bowls & Bottles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
