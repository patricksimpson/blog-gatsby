import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from 'glamorous';
import { css } from 'glamor';
import { rythm } from '../utils/typography';
import Logo from '../pages/Logo.js';

import './index.css';

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <Logo />
      </Link>
    </div>
  </div>
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
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
