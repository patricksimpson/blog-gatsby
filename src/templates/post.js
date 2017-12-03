import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.title} />
        <meta name="keywords" content={post.frontmatter.summary} />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.frontmatter.summary} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@patrexsimpson" />
      </Helmet>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        summary
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
