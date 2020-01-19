import * as path from "path"
import { GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"

type Result = {
  allMarkdownRemark: MarkdownRemarkConnection
}

export type TagIndexPageContext = {
  tag: string
}

export const createPages: GatsbyNode["createPages"] = async({
  graphql, actions
}) => {
  const { createPage } = actions
  const tagsSet = new Set<string>()

  const result = await graphql<Result>(`
    query CreatePages {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(({ node }) => {
    const { fields, frontmatter } = node;
    const { tags } = frontmatter;
    const { slug } = fields;
    tags.forEach(tag => tagsSet.add(tag))

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug,
      },
    })
  })

  tagsSet.forEach((tag) => {
    createPage({
      path: `/tag/${tag}`,
      component: path.resolve(`./src/templates/tag-index.tsx`),
      context: {
        tag
      }
    })
  })
}
