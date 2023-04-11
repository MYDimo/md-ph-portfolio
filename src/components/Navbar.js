import { Link } from "gatsby"
import React, { useState } from "react"
import "../styles/navbar.css"
import "../styles/hamburgers.css"

export default function Navbar() {
  const [hamActive, setActive] = useState(false)

  const toggleHam = () => {
    setActive(hamActive => !hamActive)
  }

  return (
    <nav>
      <div className="navWrapper">
        <button
          className={
            hamActive
              ? "hamburger hamburger--spin is-active"
              : "hamburger hamburger--spin"
          }
          type="button"
          onClick={toggleHam}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
          <Link to="/" className={hamActive ? "homeLogo noDisplay" : "homeLogo"}>kiselyak.studio</Link>
        <div className={hamActive ? "navLinks" : "navLinks  noDisplay"}>
          <Link to="/portraits">Portraits</Link>
          <Link to="/landscapes">Landscapes</Link>
          <Link to="/events">Events</Link>
          <Link to="/albums">Albums</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  )
}
