import React from "react"
import { graphql } from "gatsby"
import BlogListLayout from "../components/pagelayout/blog-list-layout"

export default ({ data }) => {
  return <BlogListLayout data={data} currentPage={1} />
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
      totalCount
    }
  }
`
