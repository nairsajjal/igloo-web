import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from "react-md"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="site-links">
      <Link to="/" className="site-brand">
        <img src="images/logos/logo.svg" alt={siteTitle} />
      </Link>
      <div className="header-items">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    </div>
    <Button raised className="secondary btn btn-outline">
      <Link to="#contact-section">Get in touch</Link>
    </Button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteLogo: ``,
}

export default Header
