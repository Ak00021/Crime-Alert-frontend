
import { useState } from "react"
import ReportForm from "./ReportForm.jsx"
import AlertsViewer from "./AlertsViewer.jsx"
import "./ReportSection.css"

function ReportSection() {
  const [activeTab, setActiveTab] = useState("report")

  return (
    <section id="report" className="report-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Report Crime & View Alerts</h2>
          <p className="section-description">Use our platform to report incidents or check crime alerts in your area</p>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === "report" ? "active" : ""}`}
              onClick={() => setActiveTab("report")}
            >
              Report a Crime
            </button>
            <button
              className={`tab-button ${activeTab === "view" ? "active" : ""}`}
              onClick={() => setActiveTab("view")}
            >
              View Area Alerts
            </button>
          </div>

          <div className="tab-content">{activeTab === "report" ? <ReportForm /> : <AlertsViewer />}</div>
        </div>
      </div>
    </section>
  )
}

export default ReportSection

