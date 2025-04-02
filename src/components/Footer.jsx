import { FaShieldAlt, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaShieldAlt className="logo-icon" />
              <span className="logo-text">SafeAlert</span>
            </div>
            <p className="footer-description">
              Helping communities stay safe through real-time crime reporting and alerts.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#report">Report Crime</a>
              </li>
              <li>
                <a href="#alerts">View Alerts</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Safety Tips</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <address className="contact-info">
              <p>
                <FaPhone className="contact-icon" /> Emergency: 911
              </p>
              <p>
                <FaPhone className="contact-icon" /> Non-Emergency: (555) 123-4567
              </p>
              <p>
                <FaEnvelope className="contact-icon" /> support@safealert.com
              </p>
            </address>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SafeAlert. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

