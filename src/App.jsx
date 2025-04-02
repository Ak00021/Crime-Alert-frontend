
import Header from "./components/Header.jsx"
// import HeroSection from "./components/HeroSection.jsx"
// import HowItWorksSection from "./components/HowItWorksSection.jsx"
// import ReportSection from "./components/ReportSection.jsx"
// // import CrimeMapSection from "./components/CrimeMapSections.jsx"
// import TestimonialsSection from "./components/TestimonialsSection.jsx"
// import CtaSection from "./components/CtaSection.jsx"
import Landing from "./Landing.jsx"
import Footer from "./components/Footer.jsx"
import Signup from "./components/Signup.jsx"
import Login from "./components/Login.jsx"
import HowItWorksSection from "./components/HowItWorksSection.jsx"
import {Route,Routes} from "react-router-dom"
import ReportForm from "./components/ReportForm.jsx"
import AlertsViewer from "./components/AlertsViewer.jsx"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/how-it-works" element={<HowItWorksSection/>}/>
        <Route path="/report" element={<ReportForm/>}/>
        <Route path="/alerts" element={<AlertsViewer/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

