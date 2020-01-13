import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import Tag from "../components/Tag/tag"
import { BlogPostPageQuery } from "../../types/graphql-types"

type BlogPostData = {
  data: BlogPostPageQuery
}

export const query = graphql`
  query BlogPostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Component: React.FC<BlogPostData> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Component