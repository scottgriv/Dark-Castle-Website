/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dark Castle`,
    description: `🏰 🌲 A vibrantly elegant dark theme available for multiple platforms. Inspired by the timeless beauty and mystery of medieval castles, this theme combines rich, deep colors with a clean and modern design.`,
    author: `@scottgriv`,
    siteUrl: `https://darkcastle.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dark Castle Theme`,
        short_name: `Dark Castle`,
        start_url: `/`,
        background_color: `#2D449B`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#2D449B`,
        display: `minimal-ui`,
        icon: `src/images/home-icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
        include_favicon: false,
      },
    },
  ],
}
