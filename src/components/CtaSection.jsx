import { FaPhone } from "react-icons/fa"
import "./CtaSection.css"

function CtaSection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Join the SafeAlert Network</h2>
          <p className="cta-description">
            Be part of the community safety initiative. Sign up today to report incidents, receive alerts, and help make
            your neighborhood safer.
          </p>
          <div className="cta-buttons">
            <a href="#" className="primary-button">
              Sign Up Now
            </a>
            <a href="tel:911" className="secondary-button emergency-button">
              <FaPhone /> Emergency: 911
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-title">Have Questions?</h3>
            <form className="contact-form">
              <input type="email" placeholder="Your email address" required className="contact-input" />
              <button type="submit" className="contact-button">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection;

