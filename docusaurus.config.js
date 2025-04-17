// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `JJamVa's TIL`,
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://jjamva.github.io",
  baseUrl: "/FE-TIL-JJamVa/",
  organizationName: "jjamva",
  projectName: "FE-TIL-JJamVa",
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  markdown: {
    format: "detect",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "/img/Among_us.jpg",
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: `JJamVa FE TIL`,
        logo: {
          alt: "My Site Logo",
          src: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTdfMTY4/MDAxNjAwMzE4MTUzMTg0.DqpZ3y6RlY2NSt4590JQO_AYm0gnqOZE04oFCxGIpBsg.8UF4uC-4jN-8HjTyTmsPAlpc0gDJHrnUmDsgAOCNnX4g.GIF.jangma2017/%EC%96%B4%EB%AA%BD%EC%96%B4%EC%8A%A4-gif-%EA%B1%B7%EA%B8%B0%EB%AA%A8%EC%85%982.gif?type=w800",
        },
        items: [
          {
            type: "doc",
            docId: "frontend/intro",
            position: "left",
            label: "Front-End",
          },
          {
            type: "doc",
            docId: "algorithm/intro",
            position: "left",
            label: "Algorithm",
          },
          {
            type: "doc",
            docId: "tools/intro",
            position: "left",
            label: "Tools",
          },
          {
            href: "https://github.com/JJamVa",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     // {
          //     //   label: 'Tutorial',
          //     //   to: '/docs/intro',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JJamVa, Built with Docusaurus. `,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
