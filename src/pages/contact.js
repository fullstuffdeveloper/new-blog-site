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
        <p className={contactStyles.mainText}>
          Hey, got an idea about your{" "}
          <span className={contactStyles.appWeb}>app</span> or
          <span className={contactStyles.appWeb}> website</span> then feel free
          to contact me i will be available on my instagram in my free time.
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
