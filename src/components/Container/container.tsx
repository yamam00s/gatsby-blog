import React from "react"
// CSS Modulesをimportすると型定義がなく警告が出るためrequire
const containerStyles = require("./container.module.scss")

// React.FCはchildren?: React.ReactNodeというpropsを受け取っている
const Component: React.FC = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
export default Component