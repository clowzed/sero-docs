// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'sero',
    tagline: "Lightning-fast static web publishing",
    url: "https://clowzed.github.io/",
    baseUrl: "/build",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "clowzed", // Usually your GitHub org/user name.
  projectName: "serodocs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "sero",
        logo: {
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
         
          {
            href: "https://github.com/clowzed/sero",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
  
          {
            title: "More",
            items: [

              {
                label: "GitHub",
                href: "https://github.com/clowzed/sero",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} clowzed`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "toml", "bash"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "openapi.json",
            outputDir: "docs/OpenAPI",
            downloadUrl:
              "https://raw.githubusercontent.com/clowzed/sero/master/openapi.json",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
