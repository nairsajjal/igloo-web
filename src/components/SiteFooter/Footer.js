import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

const Footer = ({ siteTitle, copyright }) => {
  return (
    <footer className="site-footer">
      <div className="footer-section container">
        <div className="site-logo">
          <Link to="/" className="site-brand">
            <img src="images/logos/logo.svg" alt={siteTitle} />
          </Link>
          <p className="text-light">{copyright}</p>
        </div>
        <div className="footer-menu">
          <div className="footer-top-menu">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/">Get in touch</Link>
          </div>
          <div className="footer-bottom-menu text-light">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
  copyright: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  copyright: ``,
}
export default Footer
