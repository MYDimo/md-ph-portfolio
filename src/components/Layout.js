import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import "../styles/normalize.css"

export default function Layout({ children }) {
  return (
    <>
      <div className="pageContent">
        <Navbar />
        <div className="rightSideWrapper">{children}</div>
      </div>
      <footer>Copyright 2022 Mihaylo Dimo</footer>
    </>
  )
}
