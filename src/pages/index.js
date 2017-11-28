import React from 'react';
import Link from 'gatsby-link';
import { css } from "glamor";
import { rhythm } from '../utils/typography';

import './index.css';

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id} className="post-item">
          <Link
            to={node.fields.slug}
            className="post-link"
          >
            <h3>
              <span>{node.frontmatter.title}</span>
              <span className="post-date"> — {node.frontmatter.date}</span>
            </h3>
            <p>{node.frontmatter.summary}</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
