import { FaCheck } from "react-icons/fa"
import "./HowItWorksSection.css"

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How SafeAlert Works</h2>
          <p className="section-description">
            Our platform connects citizens directly with law enforcement for faster response times and safer
            communities.
          </p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Report a Crime</h3>
            <p className="step-description">Fill out our simple form with details about the incident</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Alert is Generated</h3>
            <p className="step-description">Our system creates an alert with location data</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Police Notified</h3>
            <p className="step-description">The nearest police station receives the alert instantly</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Quick Response</h3>
            <p className="step-description">Officers respond to the incident with all necessary information</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-content">
            <h3 className="info-card-title">Protecting Communities Together</h3>
            <p className="info-card-description">
              SafeAlert empowers citizens to take an active role in community safety. By providing a direct line to law
              enforcement, we're creating safer neighborhoods for everyone.
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Faster response times to emergencies</span>
              </li>
              <li className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Anonymous reporting options available</span>
              </li>
              <li className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Crime mapping to identify patterns</span>
              </li>
              <li className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Community alerts for ongoing situations</span>
              </li>
            </ul>
            <button className="primary-button">Learn More</button>
          </div>
          <div className="info-card-image">
            <img src="https://images.unsplash.com/photo-1557081999-da7330de1277?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Police officer helping community" className="info-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

