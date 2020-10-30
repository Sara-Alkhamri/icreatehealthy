import React from "react"
import main from "../assets/main.png"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <div style={{ margin: `1rem auto`, padding: `0.5rem` }}>
        <Link to="/product">Product</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <img src={main} alt="Main" />
    </div>
  )
}
