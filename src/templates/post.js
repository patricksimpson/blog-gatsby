import React from "react";
import Link from "gatsby-link";
import g from "glamorous";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <g.H1>
        {post.frontmatter.title}
      </g.H1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Back to posts</Link>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
