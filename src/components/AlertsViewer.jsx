
import React , { useEffect, useState } from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import axios from 'axios'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AlertsViewer.css"

function AlertsViewer() {
  const lat=28.6294256;
  const long=77.450509;
  const [locations] = useState([
    { name: "Location A", latitude: lat, longitude:long },
    { name: "Location B", latitude: 77.2088282, longitude: 28.6139298 },
    // Add more locations here
  ]);
  const [location, setLocation] = useState("")
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(()=>{
    const fun=async()=>{
    handleGetLocation(); 
    const API_URL=import.meta.env.VITE_API_URL
    try{
      let res=await axios.get(`${API_URL}crime-api/getCrimedata`);
      console.log(res.data)
    }catch(error){
      console.log("error fetching crime details",error);
    }
  };
  fun();
},[]);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
            console.log('diff algo',latitude,longitude);
          locations.forEach((location) => {
            const distance = haversineDistance(
              latitude,
              longitude,
              location.latitude,
              location.longitude
            );

            if (distance <= 5) {
              alert(`You are within 5km of ${location.name}!`);
              console.log(
                `Alert: Within 5km of ${location.name}. Distance: ${distance} km`
              );
            }
            else{
                console.log('wasted')
            }
          });
        },
        (error) => {
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };
  const Map = ({ latitude, longitude }) => {
    useEffect(() => {
      // Initialize map
      const map = L.map("map").setView([latitude, longitude], 13);
  
      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);
  
      // Add a marker for the current location
      L.marker([latitude, longitude]).addTo(map).bindPopup("You are here!").openPopup();
  
      return () => {
        map.remove(); // Clean up map instance on component unmount
      };
    }, [latitude, longitude]);
  
    return <div id="map" style={{ height: "400px", width: "600px" }}></div>;
  };

  const handleSearch = () => {
    if (location.trim()) {
      setHasSearched(true)
    }
  }

  return (
    <div className="alerts-container">
      <div className="search-area">
        <label htmlFor="area-search">Search Location</label>
        <div className="search-input">
          <input
            type="text"
            id="area-search"
            placeholder="Enter neighborhood, city, or zip code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch /> Search
          </button>
        </div>
      </div>

      <div className="alerts-content">
        <h3 className="alerts-title">Recent Alerts</h3>

        {hasSearched && location ? (
          <div className="alerts-list">
            <div className="alert-item alert-warning">
              <div className="alert-header">
                <span className="alert-type">Suspicious Activity</span>
                <span className="alert-time">2 hours ago</span>
              </div>
              <p className="alert-description">
                Suspicious person reported near Main St & 5th Ave. Police are investigating.
              </p>
              <div className="alert-location">
                <FaMapMarkerAlt className="location-icon" /> 0.5 miles from search location
              </div>
            </div>

            <div className="alert-item alert-danger">
              <div className="alert-header">
                <span className="alert-type">Theft</span>
                <span className="alert-time">Yesterday</span>
              </div>
              <p className="alert-description">
                Vehicle break-in reported in the Central Park parking lot. Multiple vehicles affected.
              </p>
              <div className="alert-location">
                <FaMapMarkerAlt className="location-icon" /> 1.2 miles from search location
              </div>
            </div>

            <div className="alert-item alert-info">
              <div className="alert-header">
                <span className="alert-type">Vandalism</span>
                <span className="alert-time">2 days ago</span>
              </div>
              <p className="alert-description">
                Graffiti reported on public property near Riverside Elementary School.
              </p>
              <div className="alert-location">
                <FaMapMarkerAlt className="location-icon" /> 0.8 miles from search location
              </div>
            </div>

            <div className="alerts-footer">
              <span className="location-display">Showing alerts near: {location}</span>
              <button className="view-all-button">View All</button>
            </div>
          </div>
        ) : (
          <div className="no-location">
            {/* <FaMapMarkerAlt className="no-location-icon" />
            <h4 className="no-location-title">No Location Selected</h4>
            <p className="no-location-description">Enter your location above to view crime alerts in your area</p> */}
             {lat !== 0 && long !== 0 && (
        <Map latitude={lat} longitude={long} />
      )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AlertsViewer

