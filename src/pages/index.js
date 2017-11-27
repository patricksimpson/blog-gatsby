import React from 'react';
import Link from 'gatsby-link';
import g from 'glamorous';
import { css } from "glamor";
import { rhythm } from '../utils/typography';

const linkStyle = css({ textDecoration: `none`, color: `inherit` });

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            className={linkStyle}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              <span>{node.frontmatter.title}</span>
              <g.Span color="#565656"> — {node.frontmatter.date}</g.Span>
            </g.H3>
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
