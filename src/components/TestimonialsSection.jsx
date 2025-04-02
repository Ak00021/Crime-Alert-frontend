import { FaUserCircle } from "react-icons/fa"
import "./TestimonialsSection.css"

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Community Impact</h2>
          <p className="section-description">
            See how SafeAlert is making a difference in communities across the country
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial-author">
              <FaUserCircle className="author-icon" />
              <div className="author-info">
                <h3 className="author-name">Sarah Johnson</h3>
                <p className="author-role">Community Member</p>
              </div>
            </div>
            <p className="testimonial-text">
              "I witnessed a break-in and was able to report it instantly through SafeAlert. Police arrived within
              minutes and caught the perpetrator. This system works!"
            </p>
          </div>

          <div className="testimonial">
            <div className="testimonial-author">
              <FaUserCircle className="author-icon" />
              <div className="author-info">
                <h3 className="author-name">Officer Michael Torres</h3>
                <p className="author-role">Police Department</p>
              </div>
            </div>
            <p className="testimonial-text">
              "SafeAlert has revolutionized how we receive and respond to crime reports. The detailed information we get
              helps us respond more effectively and solve cases faster."
            </p>
          </div>

          <div className="testimonial">
            <div className="testimonial-author">
              <FaUserCircle className="author-icon" />
              <div className="author-info">
                <h3 className="author-name">David Chen</h3>
                <p className="author-role">Neighborhood Watch</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Our neighborhood watch group uses SafeAlert to stay informed about local incidents. It's helped us
              coordinate with police and make our community safer."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

