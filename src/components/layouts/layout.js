/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { siteTitle, copyright } from "../../../data/SiteConfig"

import Header from "../SiteHeader/Header"
import Footer from "../SiteFooter/Footer"
import "./style/app.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Footer siteTitle={siteTitle} copyright={copyright} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
