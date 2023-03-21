import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    // <div className={`layout ${lightBox ? "noScroll" : ""}`}>
    //   {lightBox && (
    //     <div className="lightBox" onClick={() => hideLightbox()}>
    //         <GatsbyImage image={lightBox} alt="" className="lightBoxImg" />
    //     </div>
    //   )}
    //   <Navbar />
    //   <div className="content">
    //     {children}
    //   </div>
    //   <footer>Copyright 2022 Mihaylo Dimo</footer>
    // </div>
    <>
      <div className="content">
      <Navbar />
        {children}
      </div>
      <footer>Copyright 2022 Mihaylo Dimo</footer>
    </>
  )
}
