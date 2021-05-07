module.exports = {
  siteMetadata: {
    title: `portfolio`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
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
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
};
