import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import ToggleButton from "react-toggle-button"
import "./navbar.scss"
import { Navbar as NewNavbar, Nav } from "react-bootstrap"

const Navbar = () => {
  //   const [val, setToggleval] = useState(false)

  return (
    <NewNavbar className="NewNavbar" expand="lg" sticky="top">
      <NewNavbar.Brand href="/">CodeTalk</NewNavbar.Brand>
      <NewNavbar.Toggle />
      <NewNavbar.Collapse className="justify-content-end">
        <Nav>
          <Link to="/blog" className="NewNavbar__link">
            Blog
          </Link>
          <Link to="/contact" className="NewNavbar__link">
            Contact
          </Link>
          <Link to="/about" className="NewNavbar__link">
            About
          </Link>
        </Nav>
      </NewNavbar.Collapse>
    </NewNavbar>
  )
}

export default Navbar
