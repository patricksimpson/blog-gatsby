import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { css } from 'glamor'
import { rhythm } from '../utils/typography'
import LogoSVG from '../components/Logo'
import favicon from '../images/favicon.png'

import './prism.css'
import './index.css'

const Header = () => (
  <div className="header">
    <div className="logo-link-container">
      <Link to={`/`} className="site-title">
        [ PS ]
      </Link>
    </div>
    <div className="nav-link-container">
      <Link className="nav-link" to={`/`}>
        Posts
      </Link>
      <Link className="nav-link" to={`/about`}>
        About
      </Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Patrick Simpson</title>
      <meta
        name="description"
        content="The blog of Patrick Simpson; Software, Development, JavaScript."
      />
      <meta
        name="keywords"
        content="Javascript, Development, Web Development, Internet"
      />
      <meta
        name="twitter:title"
        content="The blog of Patrick Simpson; Software, Development, JavaScript."
      />
      <meta
        name="twitter:description"
        content="Javascript, Development, Web Development, Internet"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@patrexsimpson" />
    </Helmet>
    <Header />
    <div className="main">{children()}</div>
  </div>
)

export default TemplateWrapper
