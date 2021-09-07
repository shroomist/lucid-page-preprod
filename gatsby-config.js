module.exports = {
  siteMetadata: {
    title: `rizome.io | Cardano Blockchain Solutions`,
    description: `Cardano blockchain stake pool. Delegate Cardano to reliable low fee pool. Architecture and Infrastructure for Distributed Ledger technologies.`,
    keywords: 'blockchain, cardano, stake, stakepool, lucid, delegate, secure, mining, staking, bitcoin',
    author: `Andrej Novikov`,
    siteUrl: `https://www.rizome.io`,
    imageSource: '/rizome_logo.png',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
     resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-4J71P1KW1L'],
      }
    },
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
