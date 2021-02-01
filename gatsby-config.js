const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'VW Camper',
    author: 'Che Kin To',
    description: 'VW Camper'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        context: path.join(__dirname, "src/context"),
        features: path.join(__dirname, "src/features"),
        helpers: path.join(__dirname, "src/helpers"),
        pages: path.join(__dirname, "src/pages"),
        routes: path.join(__dirname, "src/routes"),
        styles: path.join(__dirname, "src/styles"),
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
