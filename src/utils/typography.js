import Typography from 'typography'
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideThemeStyles = options => ({
  a: {
    transition: 'all 0.5s ease',
  },
})

const typography = new Typography(oceanBeachTheme)

module.exports = typography
