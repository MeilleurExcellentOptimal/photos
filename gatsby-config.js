module.exports = {
  siteMetadata: {
    title: `Photos`,
    description: `Photos of Valentin`,
    author: `@valentin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        quality: 100,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
  ],
}
