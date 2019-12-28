import React from "react"

type Header= { headerText: string }

const Component: React.FC<Header> = props => <h1>{ props.headerText }</h1>

export default Component