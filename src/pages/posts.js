import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'
import Helmet from 'react-helmet'

import './posts.css'

const Posts = ({ data }) => {
  return (
    <div>
      <h2>Older Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post-item">
          <Link to={node.fields.slug} className="post-link post-link-old">
            <div className="post-title">
              <span>{node.frontmatter.title}</span>
            </div>
            <span className="post-date">{node.frontmatter.date}</span>
          </Link>
        </div>
      ))}
      <Link to="/">Newer Posts</Link>
      <Helmet>
        <title>Older Posts by Patrick Simpson</title>
      </Helmet>
    </div>
  )
}

export default Posts

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      skip: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do, YYYY")
            summary
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
