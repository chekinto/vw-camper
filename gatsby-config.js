const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'VW Camper',
    author: 'Che Kin To',
    description: 'VW Camper'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src/assets'),
        constants: path.join(__dirname, 'src/components/constants'),
        pages: path.join(__dirname, 'src/pages'),
        ui: path.join(__dirname, 'src/components/ui'),
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
  ],
}
