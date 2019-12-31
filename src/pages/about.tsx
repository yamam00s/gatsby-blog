import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { AboutSiteQuery } from "../../types/graphql-types"

type aboutData = {
  data: AboutSiteQuery
}

export const pageQuery = graphql`
  query AboutSite {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Component: React.FC<aboutData> = ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export default Component