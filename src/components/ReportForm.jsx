
import { useState } from "react"
import { FaMapMarkerAlt, FaUsersCog } from "react-icons/fa"
import "./ReportForm.css"

function ReportForm() {
  const [lat1,setLat1]=useState()
  const [long,setLong1]=useState()
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    incidentType: "",
    location: "",
    description: "",
    urgency: "non-emergency",
    isAnonymous: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }
  //logic to get current location
  const handleLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const {latitude,longitude}=position.coords;
          console.log(`Latitude is :${latitude} and longitude is : ${longitude}`);
          setLat1(latitude);
          setLong1(longitude);
          //call opencage API for reverse geocoding
          const apiKey="95c904a8f3a04dae81ff6dca30a802fb";
          const response= await fetch( `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
          const data= await response.json();

          if(data.results && data.results.length >0){
            const locationString = data.results[0].formatted;
            setFormData(prevState=>({...prevState,"location":locationString}));
            console.log("location string is: ",locationString);
          }
          else{
            console.log('No results found');
          }
        },
        (error)=>{
          console.log("Error Fetching location",error);
        }
      );
    }
    else{
      console.log('Geolocation is not supported by browser');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        console.log('submitted',formData)
        setIsSubmitted(false)
        setFormData({
          name: "",
          contact: "",
          incidentType: "",
          location: "",
          description: "",
          urgency: "non-emergency",
          isAnonymous: false,
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div className="success-message">
          <h3>Report Submitted Successfully!</h3>
          <p>
            Your report has been sent to the nearest police station. Thank you for helping keep your community safe.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label htmlFor="incidentType">Type of Incident</label>
            <select
              id="incidentType"
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
            >
              <option value="">Select incident type</option>
              <option value="theft">Theft</option>
              <option value="assault">Assault</option>
              <option value="vandalism">Vandalism</option>
              <option value="suspicious">Suspicious Activity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <div className="location-input">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter address or location details"
                required
              />
              <button type="button" onClick={handleLocation} className="location-button">
                <FaMapMarkerAlt /> Use Current
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide details about what happened"
              rows={4}
              required
            />
          </div>

          <div className="form-group radio-group">
            <label>Urgency Level</label>
            <div className="radio-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="urgency"
                  value="emergency"
                  checked={formData.urgency === "emergency"}
                  onChange={handleChange}
                />
                <span>Emergency (In progress)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="urgency"
                  value="non-emergency"
                  checked={formData.urgency === "non-emergency"}
                  onChange={handleChange}
                />
                <span>Non-emergency</span>
              </label>
            </div>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="isAnonymous"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleChange}
            />
            <label htmlFor="isAnonymous">Report Anonymously</label>
          </div>

          {!formData.isAnonymous && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Contact Information</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Phone number or email"
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() =>
                setFormData({
                  name: "",
                  contact: "",
                  incidentType: "",
                  location: "",
                  description: "",
                  urgency: "non-emergency",
                  isAnonymous: false,
                })
              }
            >
              Clear Form
            </button>
            <button type="submit" className="primary-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ReportForm

