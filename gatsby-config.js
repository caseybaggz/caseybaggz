module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-flow`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#00BCD4",
        theme_color: "#00BCD4",
        display: "minimal-ui",
        icon: "src/images/manifest/touch-icon-retina.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-offline`
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: [`600`]
          },
          {
            family: `Open Sans`,
            variants: [`400`]
          }
        ]
      }
    }
  ]
};
