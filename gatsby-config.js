module.exports = {
  pathPrefix: "/lucid-page-preprod",
  siteMetadata: {
    title: `Cardano Lucid Pool | rizome.io Blockchain Solutions`,
    description: `Lucid Cardano blockchain stake pool. Delegate Cardano to reliable low fee pool. Lucid Garden - place of confidence.`,
    keywords: 'lucid, blockchain, cardano, stake, stakepool, lucid, delegate, secure, mining, staking, bitcoin',
    author: `Andrej Novikov`,
    siteUrl: `https://www.rizome.io`,
    imageSource: '/rizome_logo.png',
    social: [
      {  name: "telegram", url: 'https://t.me/lucid_ada_pool'  },
      {  name: "twitter", url: 'https://twitter.com/lucid_ada_pool'  },
      {  name: "github", url: 'https://github.com/rizome-io'  },
      {  name: "youtube", url: 'https://www.youtube.com/channel/UCQCAGGH8845ccdKqvqo0tQQ'  },
      {  name: "website", url: 'https://rizome.io'  },
      {  name: "email", url: 'mailto:id@rizome.io'  },
      { name: 'discord', url: 'https://discord.gg/v4tcAmuM' },
    ],
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
        icon: `src/images/rizome-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
