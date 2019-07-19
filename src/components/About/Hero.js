import React from "react"

import { hero } from "./Data"

const Hero = () => {
  const title = hero.title
  
  return (
    <main className="hero-section-wrapper">
      <div className="hero-section">
        <div className="banner-right-img">
        </div>
        <div className="container">
          <div className="banner-content">
            <h2 className="h2">{title}</h2>
            
          </div>
        </div>
      </div>
    </main>
  )
}
export default Hero