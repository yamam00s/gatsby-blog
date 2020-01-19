import React from "react"
import { Link } from "gatsby"
const styles = require("./tag.module.scss")

type Tag = {
  name: string
}

const Component: React.FC<Tag> = ({ name }) => (
  <div className={styles.tag}>
    <Link to={`/tag/${name}`}>
      {name}
    </Link>
  </div>
)
export default Component