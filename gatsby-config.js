/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nicenicegame Porfolio',
        short_name: 'Portfolio',
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon.svg'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`
      }
    }
  ],
  siteMetadata: {
    title: "Tatpol's Portfolio",
    description: 'Tatpol Samakpong Portfolio - Software Engineering Student',
    copyright: 'This website is copyright 2021 Tatpol Samakpong'
  }
}
