import React from "react"
import { Link } from "gatsby"
import Layout from "../components/shared/layout/layout"
import "../styles/index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger, faInstagram } from "@fortawesome/free-solid-svg-icons"
import Head from "../components/shared/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className="home-container">
        <p className="home-container__main-text">
          Hey I am Abhishek > A web developer i build website and Apps for
          clients.
          <FontAwesomeIcon icon={faHamburger} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
