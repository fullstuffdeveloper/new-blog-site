import React, { useState } from "react"
import { Link } from "gatsby"
import ToggleButton from "react-toggle-button"
import "./navbar.scss"

const Navbar = () => {
  //   const [val, setToggleval] = useState(false)

  return (
    <nav className="navbar">
      <ul className="navbar__list-container">
        <li className="navbar__list-container__list-item">
          <Link to="/" className="navbar__list-container__list-item__link">
            Home
          </Link>
        </li>
        <li className="navbar__list-container__list-item">
          <Link to="/blog" className="navbar__list-container__list-item__link">
            Blog
          </Link>
        </li>
        <li className="navbar__list-container__list-item">
          <Link
            to="/contact"
            className="navbar__list-container__list-item__link"
          >
            Contact
          </Link>
        </li>
        <li className="navbar__list-container__list-item">
          <Link to="/about" className="navbar__list-container__list-item__link">
            About
          </Link>
        </li>
      </ul>

      <ul className="navbar__social-container">
        <li className="navbar__social-container__item">GitHub</li>
        <li className="navbar__social-container__item">Instagram</li>
        <li className="navbar__social-container__item">Email</li>
      </ul>
    </nav>
  )
}

export default Navbar
