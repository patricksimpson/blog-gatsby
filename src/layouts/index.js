import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Logo from "../components/Logo";

import './index.css';

const linkStyle = css({ float: `right`, padding: `1rem` })

const Header = () => (
  <g.Div
    margin={`0 auto`}
    maxWidth={960}
    paddingLeft={rhythm(1)}
    paddingRight={rhythm(1)}
  >
    <Link to={`/`}>
      <Logo />
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
  </g.Div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Homepage of Patrick Simpson"
      meta={[
        { name: 'description', content: 'The online ramblings of Patrick Simpson; Father, Software, Development, JavaScript.' },
        { name: 'keywords', content: 'Javascript, Development, Web Development, Internet' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1rem 1.5rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
