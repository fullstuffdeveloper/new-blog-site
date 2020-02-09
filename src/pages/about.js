import React from "react"
import Layout from "../components/shared/layout/layout"
import Head from "../components/shared/head"
import "../styles/about.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="about-container">
        <p>
          Well I am{" "}
          <span className="about-container__fancy-text">abhishek</span>. I love
          coding as well playing around with some code on my free time. I like
          to build things as well as to break things to know the heck behind it.
          I love to{" "}
          <span className="about-container__fancy-text">build website</span> and
          if you got an idea then i am the right guy for you.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
