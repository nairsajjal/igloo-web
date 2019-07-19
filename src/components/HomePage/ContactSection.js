import React from 'react'
import ContactForm from '../Forms/ContactForm'
const ContactSection = () => {
  return (
    <div className="contact-section section dark-bg" id="contact-section">
      <div className="container grid2">
        <div className="contact-content col">
          <h3>Interested? Get in touch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="form col">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactSection