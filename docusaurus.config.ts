import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

const config: Config = {

  title: 'Godocx',
  tagline: 'A pure Go library to create or modify docx files',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gomutex.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/godocx',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gomutex', // Usually your GitHub org/user name.
  projectName: 'godocx', // Usually your repo name.

  plugins: [tailwindPlugin],

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Godocx',
      logo: {
        alt: 'Godocx',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'User Guide',
        // },
        { to: '/docs/intro', label: 'User Guide', position: 'left' },

        {
          label: 'API documentation',
          to: 'https://pkg.go.dev/github.com/gomutex/godocx',
          position: 'left'
        },
        {
          href: 'https://github.com/gomutex/godocx',
          label: 'GitHub',
          position: 'right',
        },

        {
          href: 'https://github.com/gomutex/godocx-examples',
          label: 'Examples',
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
              label: 'User Guide',
              to: '/docs/intro',
            },
            {
              label: 'API documentation',
              to: 'https://pkg.go.dev/github.com/gomutex/godocx',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'My Github',
              href: 'https://github.com/gomutex',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gomutex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'More examples',
              to: 'https://github.com/gomutex/godocx-examples',
            },
            {
              label: 'Project Github',
              href: 'https://github.com/gomutex/godocx',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
