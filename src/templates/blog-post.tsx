import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import Tag from "../components/Tag/tag"
import { BlogPostPageQuery } from "../../types/graphql-types"
const styles = require("./blog-post.module.css")

type BlogPostData = {
  data: BlogPostPageQuery
}

export const query = graphql`
  query BlogPostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
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
      <div className={styles.tags}>
          {post.frontmatter.tags.map((tag: string ) => (
            <Tag name={tag}></Tag>
          ))}
      </div>
    </Layout>
  )
}

export default Component