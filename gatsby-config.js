/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'ByVasco, Designer and Developer',
    autor: 'Vasco Marques'
  },

  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['ia'],
          urls: ['/fonts/fonts.css'],
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
  ]
}