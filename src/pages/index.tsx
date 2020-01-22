import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout/layout"
import ArticleList from "../components/ArticleList/articleList"
import { IndexPageQuery } from "../../types/graphql-types"

type IndexData = {
  data: IndexPageQuery
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const Component: React.FC<IndexData> = ({ data }) => {
  const { site } = data
  return (
    <Layout>
      <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            {site.siteMetadata.title}
          </h1>
          <ArticleList props={data}/>
        </div>
    </Layout>
  )
}

export default Component
