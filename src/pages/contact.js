import React from "react"
import { Link } from "gatsby"
import Layout from "../components/shared/layout/layout"
import contactStyles from "../styles/contact.module.scss"
import Head from "../components/shared/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.contactContainer}>
        <p>Contact page!</p>
        <i
          className="fab fa-instagram"
          style={{ fontSize: "60px", color: "red" }}
        ></i>
      </div>
    </Layout>
  )
}

export default ContactPage
