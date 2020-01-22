import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout/layout"
import ArticleList from "../components/ArticleList/articleList"
import { TagIndexPageContext } from "../../gatsby-node/createPages"
import { TagIndexPageQuery } from "../../types/graphql-types"

type TagIndexData = {
  data: TagIndexPageQuery
  pageContext: TagIndexPageContext
}

export const pageQuery = graphql`
  query TagIndexPage($tag: [String!]) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
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

const Component: React.FC<TagIndexData> = ({ data, pageContext }) => {
  const { tag } = pageContext
  return (
    <Layout>
      <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            {tag}の記事一覧
          </h1>
          <ArticleList props={data}/>
        </div>
    </Layout>
  )
}

export default Component
