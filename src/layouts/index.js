import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import LogoSVG from "../components/Logo";
import favicon from '../images/favicon.png';

import './prism.css';
import './index.css';

const Header = () => (
  <div className="header">
    <div className="logo-link-container">
      <Link to={`/`} className="logo-link svg">
        <LogoSVG />
      </Link>
    </div>
    <div className="nav-link-container">
      <Link className="nav-link" to={`/`}>Posts</Link>
      <Link className="nav-link" to={`/about`}>About</Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Patrick Simpson"
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
    <div className="main">
      {children()}
  </div>
</div>
)

export default TemplateWrapper
