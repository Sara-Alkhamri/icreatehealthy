import React from "react"

import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 650,
          padding: `0 1rem`,
        }}
      >
        <header style={{ marginTop: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>I. Create. Healthy</h1>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            {/* <ListLink to="/">Home</ListLink> */}
            <ListLink to="/product">Product</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>

        {children}
      </div>
      <div>
        <footer style={{ position: `absolute`, bottom: 0 }}>
          <small>
            Made by <a href="https://saraalkhamri.com/"> Revive Labs </a>
            copyright ©2020, All Rights Reserved
          </small>
        </footer>
      </div>
    </>
  )
}
