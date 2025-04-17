import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'O-Tid',
  tagline: 'En måte å gjøre tidtaking for orienteringsarrangementer enklere',
  favicon: 'img/favicon.ico',
  url: 'https://doc.o-tid.com',
  baseUrl: '/',
  organizationName: 'O-Tid',
  projectName: 'docs',

  onBrokenMarkdownLinks: 'warn',
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'no',
    locales: ['no'],
  },

  customFields: {
    construction: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-username/otid-docs/tree/main/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/your-username/otid-docs/tree/main/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'O-Tid Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentasjon',
        },
        // {to: '/blog', label: 'Nyheter', position: 'left'},
        {
          href: 'https://github.com/o-Tid/doc',
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
              label: 'Kom i gang',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Tjenester',
          items: [
            {
              label: 'Tidtaging med o-Tid',
              href: 'https://next.o-tid.com',
            },
            {
              label: 'Liveresultater for o-Tid',
              href: 'https://live.o-tid.no',
            },
          ],
        },
        {
          title: 'Mer',
          items: [
            {
              label: 'GitHub for o-Tid Docs',
              href: 'https://github.com/o-Tid/doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} O-Tid. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

export default config;
