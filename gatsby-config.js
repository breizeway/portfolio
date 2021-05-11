module.exports = {
  siteMetadata: {
    title: `portfolio`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`100..700`, `100i..700i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /technologies/
        }
      }
    },
  ],
};
