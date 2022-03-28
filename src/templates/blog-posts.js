import React from "react"
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"
import styled from "styled-components"
require(`katex/dist/katex.min.css`)

const StyledDiscussionEmbed = styled(DiscussionEmbed)`
  border: 1px solid black;
  border-radius: 8px;
  padding: 0rem 0.5rem 0rem 0.5rem;

  iframe {
    margin-bottom: 0px;
  }
`

const OtherArticles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  a {
    color: #0f4d7a;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledH2 = styled.h2`
  border-top: 1px solid black;
`

const A = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default ({ pageContext }) => {
  const post = pageContext

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <OtherArticles>
        {post.next && (
          <A href={post.next.fields.slug}>
            &#8592;
            {`${post.next.frontmatter.title}`}
          </A>
        )}
        <div></div>
        {post.previous && (
          <div>
            <A href={post.previous.fields.slug}>
              {`${post.previous.frontmatter.title}`}
            </A>
            &#8594;
          </div>
        )}
      </OtherArticles>
      <StyledH2></StyledH2>
    </Layout>
  )
}
