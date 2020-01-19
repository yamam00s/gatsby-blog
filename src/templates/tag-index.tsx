import React from "react"
import Layout from "../components/Layout/layout"
import { TagIndexPageContext } from "../../gatsby-node/createPages"

type TagIndexData = {
  pageContext: TagIndexPageContext
}

const Component: React.FC<TagIndexData> = ({ pageContext }) => {
  const { tag } = pageContext
  return (
    <Layout>
      <div>
        {tag}の記事一覧
      </div>
    </Layout>
  )
}

export default Component