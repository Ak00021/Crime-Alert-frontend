 const Location=()=>{
  return new Promise((resolve,reject)=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const {latitude,longitude}=position.coords
          // console.log(latitude,longitude);
          resolve({latitude,longitude});
        },(error)=>{
          reject(error);
        }
      )
    } else{
      reject(new Error("GeoLocation is not supported by this browser"))
    }
  })
}
const fetchLocation=async()=>{
  try {
    const { latitude, longitude } = await Location();
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    return {latitude,longitude};
} catch (error) {
    console.error("Error fetching location:", error.message);
}
}
// fetchLocation();
export default fetchLocation;