import React from "react"
import { Link } from "gatsby"
import Layout from "../components/shared/layout/layout"
import "../styles/index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger, faInstagram } from "@fortawesome/free-solid-svg-icons"
import Head from "../components/shared/head"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"

const HomePage = () => {
  return (
    <Layout className="head-container">
      <Head title="Home" />
      <div className="head-container__main-text">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
          />
          <Card.Body>
            <Card.Title>Hey, I am Abhishek</Card.Title>
            <Card.Text>I love to design & build website for clients</Card.Text>
            <Button variant="warning">Contact</Button>
          </Card.Body>
        </Card>
      </div>
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
