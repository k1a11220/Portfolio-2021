module.exports = {
  siteMetadata: {
    title: `Beomsoo Son`,
    description: `Beomsoo's works`,
    author: `Beomsoo Son`,
    siteUrl: "https://works.beomsoo.me", // 배포 후 변경 예정
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                    theme: "Monokai Dimmed", // Or install your favorite theme from GitHub
                  },
                },
              ],
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `contents`,
              path: `${__dirname}/contents`,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {},
          },
          {
            resolve: "gatsby-plugin-canonical-urls",
            options: {
              siteUrl: "https://works.beomsoo.me",
              stripQueryString: true,
            },
          },
          {
            resolve: "gatsby-plugin-use-dark-mode",
            options: {
              classNameDark: "dark-mode",
              classNameLight: "light-mode",
              storageKey: "darkMode",
              minify: true,
            },
          },
          "gatsby-plugin-sitemap",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
  ],
};
