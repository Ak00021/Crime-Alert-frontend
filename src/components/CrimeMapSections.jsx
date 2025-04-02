import "./CrimeMapSection.css"

function CrimeMapSection() {
  return (
    <section className="crime-map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Crime Map</h2>
          <p className="section-description">View recent crime reports in your area to stay informed and vigilant</p>
        </div>
        <div className="map-container">
          <img src="https://placehold.co/1200x500" alt="Crime Map" className="crime-map" />
          <div className="map-overlay">
            <div className="map-legend">
              <h4>Map Legend</h4>
              <ul className="legend-items">
                <li>
                  <span className="legend-dot theft"></span> Theft
                </li>
                <li>
                  <span className="legend-dot assault"></span> Assault
                </li>
                <li>
                  <span className="legend-dot vandalism"></span> Vandalism
                </li>
                <li>
                  <span className="legend-dot suspicious"></span> Suspicious Activity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrimeMapSection

