import React from "react"
import { graphql } from "gatsby"
import BlogListLayout from "../components/pagelayout/blog-list-layout"

export default ({ data, pageContext }) => {
  return (
    <BlogListLayout
      data={data}
      currentPage={pageContext.currentPage}
      numPages={pageContext.numPages}
    />
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
