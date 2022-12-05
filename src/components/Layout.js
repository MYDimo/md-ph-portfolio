import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Layout({ children, lightBox }) {
  console.log(children);
  return (
    <div className="layout">
      {lightBox && (
        <div className="lightBox">
          <GatsbyImage image={lightBox} alt="" className="hui"/>
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
