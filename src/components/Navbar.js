import { Link } from "gatsby"
import React, { useState } from "react"
import "../styles/navbar.css"
import "../styles/hamburgers.css"

export default function Navbar() {
  const [hamActive, setActive] = useState(false);

  const toggleHam = () => {
    setActive((hamActive) => !hamActive)
  }

  return (
    <nav>
      <div className={hamActive?"homeLogo noDisplay":"homeLogo"}>
        <Link to="/">
          Mihaylo Dimo
        </Link>
      </div>
      <div className={hamActive?"navLinks":"navLinks noDisplay"}>
        {/* <Link to="/">Home</Link> */}
        <Link to="/portraits">Portraits</Link>
        <Link to="/landscapes">Landscapes</Link>
        <Link to="/events">Events</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/about">About</Link>
      </div>
      <button className={hamActive?"hamburger hamburger--arrowalt ham-is-active":"hamburger hamburger--arrowalt"} type="button" onClick={toggleHam}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  )
}
