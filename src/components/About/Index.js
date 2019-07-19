import React from "react"
import OurStory from "./OurStory"
import Hero from "./Hero"
import MeetTeam from "./MeetTeam.js";
import TeamListContent from "./TeamListContent";

//Data items
import { teamListContentData } from "./Data"

const About = () => {
    const executiveTeam = teamListContentData[0]
    const advisors = teamListContentData[1]
    const customerSuccessTeam = teamListContentData[2]
    const ourBoard = teamListContentData[3]
  return (
    <section className="aboutpage-section">
        <Hero />
        <OurStory />
        <MeetTeam />
        <TeamListContent teamListContent={executiveTeam}/>
        <TeamListContent teamListContent={advisors}/>
        <TeamListContent teamListContent={customerSuccessTeam}/>
        <TeamListContent teamListContent={ourBoard}/>
    </section>
  )
}

export default About