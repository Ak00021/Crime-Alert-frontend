import { useEffect ,useContext} from 'react'
import React from 'react'
import HeroSection from "./components/HeroSection.jsx"
import HowItWorksSection from "./components/HowItWorksSection.jsx"
import ReportSection from "./components/ReportSection.jsx"
// import CrimeMapSection from "./components/CrimeMapSections.jsx"
import TestimonialsSection from "./components/TestimonialsSection.jsx"
import CtaSection from "./components/CtaSection.jsx"
import {AppContext} from "./context/context.js"
import fetchLocation from './components/Location.js'
import axios from 'axios'
function Landing() {
  const {sessionDetails,setSessionDetails} = useContext(AppContext);
  useEffect(()=>{
    if(sessionDetails.login){
      const sendMails=async()=>{
        const {latitude,longitude}=await fetchLocation();
        const API_URL=import.meta.env.VITE_API_URL
        try{
          let response=await axios.post(`${API_URL}user-api/send_mail`,{email:sessionDetails.email,latitude:latitude,longitude:longitude});
          console.log(response.data)
        }catch(error){
          console.log("error occured while sending request",error);
        }
      }
      sendMails()
    }
  },[])
  return (
    <div>
      <main className="main-content">
        <HeroSection />
        <HowItWorksSection />
        <ReportSection />
        {/* <CrimeMapSection /> */}
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default Landing
