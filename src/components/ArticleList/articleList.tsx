import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import Tag from "../Tag/tag"
import { IndexPageQuery, TagIndexPageQuery } from "../../../types/graphql-types"
const styles = require("./articleList.module.scss")

type ArticleListProps = {
  props: IndexPageQuery | TagIndexPageQuery
}

// React.FCはchildren?: React.ReactNodeというpropsを受け取っている
const Component: React.FC<ArticleListProps> = ({ props }) => {
  const { allMarkdownRemark } = props
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
export default Component