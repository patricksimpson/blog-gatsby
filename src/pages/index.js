import React from 'react';
import Link from 'gatsby-link';
import g from 'glamorous';
import { rhythm } from '../utils/typography';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>{data.allMarkdownRemark.totalCount} Posts</div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
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
          }
          excerpt
        }
      }
    }
  }
`
