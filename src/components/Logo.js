import React from 'react'
import logo from '../images/ps-logo.png'
import { css } from 'glamor'
import { withPrefix } from 'gatsby-link'

const noMargin = css({ marginBottom: '0', minWidth: '144px' })

const Logo = () => (
  <img src={logo} alt="logo" title="logo" className={noMargin} />
)

const LogoSVG = () => (
  <object data={__PATH_PREFIX__ + '/logo.svg'} type="image/svg+xml" />
)

export default LogoSVG
