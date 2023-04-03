import React from "react"
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      <div className="content">
      <Navbar />
        {children}
      </div>
      <footer>Copyright 2022 Mihaylo Dimo</footer>
    </>
  )
}
