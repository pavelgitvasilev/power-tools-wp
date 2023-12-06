// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Power-tools.by`,
        description: `Acabo de bajarme la app de www.power-tools.by`,
        author: `Marketing Dev Team`,
        siteUrl: `https://power-tools.by`,
    },
    trailingSlash: `always`,
    developMiddleware: (app) => {
        app.use(
            process.env.REST_URL,
            createProxyMiddleware({
                target: process.env.REST_PROXY,
                changeOrigin: true,
            })
        );
    },
  plugins: [
    {
        resolve: `gatsby-source-wordpress`,
        options: {
            url: `${process.env.WPGRAPHQL_URL}`,
            schema: {
                perPage: 6,
                requestConcurrency: 1,
                timeout: 60000,
            },
            production: {
                hardCacheMediaFiles: true,
            },
        },
    },
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
