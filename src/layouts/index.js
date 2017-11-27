import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import LogoSVG from "../components/Logo";
import favicon from '../images/favicon.png';

const linkStyle = css({ display: 'inline-block', margin: `1rem 0`, padding: '0 1rem 0 1rem', [':hover']: { 'backgroundColor': '#efefef' } });
const noBackground = css({ backgroundImage: `none` });
const firstLink = css({ borderRight: '1px solid #ccc', padding: '0 1rem 0 1rem' });
const navLinks = css({ position: 'absolute', right: '0', top: '0' });

const Header = () => (
  <g.Div
    margin={`0 auto`}
    maxWidth={960}
    paddingLeft={rhythm(1)}
    paddingRight={rhythm(1)}
    display={`relative`}
  >
    <Link to={`/`} className={noBackground} >
      <LogoSVG />
    </Link>
    <div className={navLinks}>
      <Link className={`${linkStyle} ${firstLink} ${noBackground}`} to={`/`}>
        Posts
    </Link>
      <Link className={`${linkStyle} ${noBackground}`} to={`/about`}>
        About
    </Link>
    </div>
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
