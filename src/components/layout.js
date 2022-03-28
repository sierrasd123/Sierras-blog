import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const A = styled.a`
  color: #0f4d7a;
  &:visited {
    color: #0f4d7a;
  }
  &:hover {
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>
        <main>{children}</main>
        <footer>
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <A href="https://www.gatsbyjs.org">Gatsby</A>
          </div>
        </footer>
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
