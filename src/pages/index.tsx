import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout/layout"
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
  const { allMarkdownRemark, site } = data
  return (
    <Layout>
      <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            yamam00s blog
            {site.siteMetadata.title}
          </h1>
          <h4>{allMarkdownRemark.totalCount} Posts</h4>
          {allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default Component
