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
    <Layout className="landing-page">
      <Head title="Home" />
      <div className="landing-page__container">
        <div className="left-container"></div>
        <div className="right-container">
          <div className="main-text">
            <p className="p first">Hello</p>
            <p className="p second">I am Abhishek</p>
            <p className="p third">I develop website and mobile app</p>
          </div>
        </div>
      </div>
      {/* <div className="head-container__main-text">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
          />
          <Card.Body>
            <Card.Title>Hey, I am Abhishek</Card.Title>
            <Card.Text>I love to design & build website for clients</Card.Text>
            <Button
              variant="warning"
              href="https://www.instagram.com/__full_stack_developer__/"
              target="_blank"
            >
              Instagram
            </Button>
            <Button
              variant="warning"
              href="https://github.com/abhi67srm"
              target="_blank"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>
  </div> */}
    </Layout>
  )
}

export default HomePage
