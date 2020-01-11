import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/header"

const Component: React.FC = () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)

export default Component