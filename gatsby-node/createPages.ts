import * as path from "path"
import { GatsbyNode } from "gatsby"
import { MarkdownRemarkConnection } from "../types/graphql-types"

type Result = {
  allMarkdownRemark: MarkdownRemarkConnection
}

export const createPages: GatsbyNode["createPages"] = async({
  graphql, actions
}) => {
  const { createPage } = actions
  const result = await graphql<Result>(`
    query CreatePages {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
