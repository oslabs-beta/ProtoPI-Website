// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProtoPI',
  tagline: 'Prototype your API. Mock your server. Test your frontend. Fast.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://protopi.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oslabs-beta', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/oslabs-beta/ProtoPI-Website/edit/dev/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 100,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/protopi-social-card.jpg',
      navbar: {
        title: 'ProtoPI',
        logo: {
          alt: 'ProtoPI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/blog/about',
            label: 'About Us',
            position: 'right'
          },
          {
            href: 'https://github.com/oslabs-beta/ProtoPI',
            label: 'GitHub',
            position: 'right',
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
                label: 'Overview',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Dev Aid Repo',
                href: 'https://github.com/oslabs-beta/ProtoPI-DevAid'
              },
              {
                label: 'VS Code Extension Repo',
                href: 'https://github.com/oslabs-beta/ProtoPI',
              },
              {
                label: 'Website Repo',
                href: 'https://github.com/oslabs-beta/ProtoPI-Website'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProtoPI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;
