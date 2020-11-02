import React from "react"
import Layout from "../components/layout"
import main from "../assets/main.png"

export default function Home() {
  return (
    <div>
      <Layout />
      <img src={main} alt="Main" />
    </div>
  )
}
