import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'

import './index.css'
import './posts.css'

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="post-item post-item-front">
          <Link to={node.fields.slug} className="post-link">
            <h3 className="post-title">
              <span>{node.frontmatter.title}</span>
            </h3>
            <span className="post-date">{node.frontmatter.date}</span>
            <p>{node.frontmatter.summary}</p>
          </Link>
        </div>
      ))}
      <Link to="/posts">Older Posts</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
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
