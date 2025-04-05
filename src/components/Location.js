export let Location=()=>{
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
      handleGetLocation();

      
}