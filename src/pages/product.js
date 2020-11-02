import React from "react"
import ProductImg from "../assets/product.jpg"
import Layout from "../components/layout"

export default function Product() {
  return (
    <div style={{ color: `teal` }}>
      <Layout />
      {/* <h1>I. Create. Healthy</h1>
      <h4>You. Become. Healthy</h4> */}
      <p>
        Such wow. Very React. is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <img style={{ width: `20rem` }} src={ProductImg} alt="product" />
    </div>
  )
}
