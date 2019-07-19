import React from "react"

import { meetteam} from "./Data"

const MeetTeam = () => {
    const title = meetteam.title;
    const content = meetteam.content;
  return (
    <div className="meetteam-section-wrapper">
        <div className="meetteam-section container">
            <h3>{title}</h3>
            <div className="meetteam-content-section">
            <p>{content}</p>
            </div>
        </div>

    </div>
  )
}
export default MeetTeam;