import { Link } from "gatsby"
import React from "react"
import { Button } from "react-md"
import { hero } from "./Data"

const Hero = () => {
  const title = hero.title
  const content = hero.content
  const btnUrl = hero.btnUrl
  return (
    <main className="hero-section-wrapper">
      <div className="hero-section">
        <div className="banner-right-img">
        </div>
        <div className="container">
          <div className="banner-content">
            <h2 className="h2">{title}</h2>
            <p className="content">{content}</p>
            <Button flat className="btn primary">
              <Link to={btnUrl}>Find out more</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Hero
