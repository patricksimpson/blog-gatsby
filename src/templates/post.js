import React from "react";
import Link from "gatsby-link";

import '../pages/posts.css';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1 className="post-page-title">
        {post.frontmatter.title}
      </h1>
      <span className="post-page-date">{post.frontmatter.date}</span>
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
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
