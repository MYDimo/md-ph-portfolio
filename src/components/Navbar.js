import { Link } from 'gatsby'
import React from 'react'
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/portraits">Portraits</Link>
            <Link to="/landscapes">Landscapes</Link>
            <Link to="/events">Events</Link>
            <Link to="/albums">Albums</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}
