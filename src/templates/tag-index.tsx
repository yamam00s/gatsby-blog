import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout/layout"
import Tag from "../components/Tag/tag"
import { TagIndexPageContext } from "../../gatsby-node/createPages"
import { TagIndexPageQuery } from "../../types/graphql-types"
const styles = require("./tag-index.module.scss")

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
  const { allMarkdownRemark } = data
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
                <div className={styles.tags}>
                  {node.frontmatter.tags.map((tag: string ) => (
                    <Tag name={tag}></Tag>
                  ))}
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default Component
