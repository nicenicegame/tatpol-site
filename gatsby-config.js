/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nicenicegame Porfolio',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon.svg',
      },
    },
  ],
}
