import { FaArrowRight, FaExclamationTriangle, FaBell, FaMapMarkerAlt } from "react-icons/fa"
import "./HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Community Safety Initiative</div>
          <h1 className="hero-title">
            Report Crime. <span className="highlight">Stay Safe.</span> Protect Communities.
          </h1>
          <p className="hero-description">
            An instant crime reporting system that connects citizens with local police stations for faster response and
            safer neighborhoods.
          </p>
          <div className="hero-buttons">
            <a href="#report" className="primary-button">
              Report a Crime <FaArrowRight className="button-icon" />
            </a>
            <a href="#alerts" className="secondary-button">
              View Local Alerts
            </a>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaExclamationTriangle className="feature-icon" />
              </div>
              <h3 className="feature-title">Instant Reporting</h3>
              <p className="feature-description">Report crimes quickly with our simple form system</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaBell className="feature-icon" />
              </div>
              <h3 className="feature-title">Real-time Alerts</h3>
              <p className="feature-description">Police stations receive immediate notifications</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <FaMapMarkerAlt className="feature-icon" />
              </div>
              <h3 className="feature-title">Area Monitoring</h3>
              <p className="feature-description">View crime reports in your neighborhood</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

