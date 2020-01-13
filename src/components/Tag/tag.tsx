import React from "react"
const styles = require("./tag.module.css")

type Tag = {
  name: string
}

const Component: React.FC<Tag> = ({ name }) => (
  <div className={styles.tag}>
    <a href="">
      {name}
    </a>
  </div>
)
export default Component