import React from "react"
import Layout from "../components/shared/layout/layout"
import Head from "../components/shared/head"
import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="about-container">
        <p>About page!</p>
      </div>
    </Layout>
  )
}

export default AboutPage
