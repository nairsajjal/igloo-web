import React from "react"
import Hero from "./Hero"
import Customers from "./Customers"
import HalfImageContent from "./HalfImageContent"
import RealTimeLedger from "./RealTimeLedger"
import TestimonialCarousel from "./TestimonialCarousel"
import ContactSection from "./ContactSection"

// data files
import { halfImageContentData, testimonialCarousel } from "./Data"

const HomePage = () => {
  const livingContract = halfImageContentData[0]
  const oneTouchExecution = halfImageContentData[1]
  const tripleEntryContracting = halfImageContentData[2]
  const hybridPaymentRail = halfImageContentData[3]
  return (
    <section className="homepage-section">
      <Hero />
      <Customers />
      <HalfImageContent halfImageContent={livingContract} />
      <HalfImageContent halfImageContent={oneTouchExecution} />
      <HalfImageContent halfImageContent={tripleEntryContracting} />
      <HalfImageContent halfImageContent={hybridPaymentRail} />
      <RealTimeLedger />
      <TestimonialCarousel data={testimonialCarousel} />
      <ContactSection />
    </section>
  )
}

export default HomePage
