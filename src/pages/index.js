import React from "react"
import { Link } from "gatsby"
import Layout from "../components/shared/layout/layout"
import "../styles/index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger, faInstagram } from "@fortawesome/free-solid-svg-icons"
import Head from "../components/shared/head"
import "bootstrap/dist/css/bootstrap.min.css"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      {/* <div className="home-container">
        <p className="home-container__first-main-text">Hello</p>
        <p className="home-container__second-main-text">
          I build website and mobile app
          <FontAwesomeIcon icon={faHamburger} />
        </p>
        <p className="home-container__third-main-text">I am Abhishek</p>
  </div> */}
    </Layout>
  )
}

export default HomePage
