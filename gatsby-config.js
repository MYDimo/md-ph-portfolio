/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My site here`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "1luzw9h9hssv",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
