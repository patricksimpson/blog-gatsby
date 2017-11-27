import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Logo from "../components/Logo";
import favicon from '../images/favicon.png';

const linkStyle = css({ float: `right`, margin: `1rem 0`, padding: '0 1rem', [':hover']: { 'backgroundColor': '#efefef' } });
const noBackground = css({ backgroundImage: `none` });
const firstLink = css({ borderLeft: '1px solid #ccc' });

const Header = () => (
  <g.Div
    margin={`0 auto`}
    maxWidth={960}
    paddingLeft={rhythm(1)}
    paddingRight={rhythm(1)}
  >
    <Link to={`/`} className={noBackground} >
      <Logo />
    </Link>
    <Link className={`${linkStyle} ${noBackground} ${firstLink}`} to={`/about`}>
      About
    </Link>
    <Link className={`${linkStyle} ${noBackground}`} to={`/`}>
      Posts
    </Link>
  </g.Div >
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Homepage of Patrick Simpson"
      meta={[
        { name: 'description', content: 'The online ramblings of Patrick Simpson; Father, Software, Development, JavaScript.' },
        { name: 'keywords', content: 'Javascript, Development, Web Development, Internet' },
      ]}
    >
      <link rel="icon"
        type="image/png"
        href={favicon} />
    </Helmet>
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
