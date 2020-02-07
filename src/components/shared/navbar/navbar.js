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
        <li className="navbar__social-container__item">
          <a href="https://github.com/abhi67srm" target="_blank">
            Github
          </a>
        </li>
        <li className="navbar__social-container__item">
          <a
            href="https://www.instagram.com/__full_stack_developer__/"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li className="navbar__social-container__item">
          <a href="mailto:ranzo9430@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
