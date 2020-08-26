/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `I like Google fonts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bulgar`,
        short_name: `Bulgar`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Archivo`,
            variants: [`400`, `700`]
          }
        ],
        display: 'swap'
      }
    }
  ]
}