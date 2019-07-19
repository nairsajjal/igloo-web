import React from "react"

import Layout from "../components/layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "../components/HomePage/Index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
