// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gaming Server Management Knowledge Base',
  tagline: 'Comprehensive guides for 7 Days to Die, CSMM, CPM, and Takaro',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'ai-takaro-knowledge-base', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve docs at site root
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Gaming Server KB',
        logo: {
          alt: 'Gaming Server Management Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sevenDaysSidebar',
            position: 'left',
            label: '7 Days to Die',
          },
          {
            type: 'docSidebar',
            sidebarId: 'csmmSidebar',
            position: 'left',
            label: 'CSMM',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cpmSidebar',
            position: 'left',
            label: 'CPM',
          },
          {
            type: 'docSidebar',
            sidebarId: 'takaroSidebar',
            position: 'left',
            label: 'Takaro',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '7 Days to Die',
                to: '/7-days-to-die',
              },
              {
                label: 'CSMM',
                to: '/csmm',
              },
              {
                label: 'CPM',
                to: '/cpm',
              },
              {
                label: 'Takaro',
                to: '/takaro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gaming Server Management Knowledge Base.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;