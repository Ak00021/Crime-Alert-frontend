import React from 'react'
import HeroSection from "./components/HeroSection.jsx"
import HowItWorksSection from "./components/HowItWorksSection.jsx"
import ReportSection from "./components/ReportSection.jsx"
// import CrimeMapSection from "./components/CrimeMapSections.jsx"
import TestimonialsSection from "./components/TestimonialsSection.jsx"
import CtaSection from "./components/CtaSection.jsx"

function Landing() {
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
