import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Layout({ children, lightBox, hideLightbox }) {
  return (
    <div className={`layout ${lightBox ? "noScroll" : ""}`}>
      {lightBox && (
        <div className="lightBox" onClick={() => hideLightbox()}>
            <GatsbyImage image={lightBox} alt="" className="lightBoxImg" />
        </div>
      )}
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>Copyright 2022 Mihaylo Dimo</footer>
    </div>
  )
}
