const themeOptions = {
  siteName: "Learn Troubleshoot",
  pageTitle: "Learn Troubleshot",
  menuTitle: "Troubleshoot",
  baseDir: "learn",
  contentDir: "source",
};

module.exports = {
  pathPrefix: "/learn",
  siteMetadata: {
    title: "Learn Troubleshoot"
  },
  plugins: [
    {
      resolve: "../gatsby-theme-troubleshoot",
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: "Learn Troubleshoot",
        description: "The Official Troubleshoot Documentation",
        githubRepo: "replicatedhq/troubleshoot",
        sidebarCategories: {
          null: [
            "index"
          ],
          "Preflight Checks": [
            "preflight/introduction",
            "preflight/install-preflight",
            "preflight/first-check",
          ],
          "Support Bundle": [
            "support-bundle/introduction",
          ],
        },
      },
    },
  ],
};