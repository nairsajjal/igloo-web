import React from "react"

import { ourstory } from "./Data"

const OurStory = () => {
  const title = ourstory.title
  const content = ourstory.content
  return (
    <div className="ourstory-section-wrapper">
      <div className="ourstory-section container">
        <h3>{title}</h3>

        <div className="ourstory-content-section">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
export default OurStory
