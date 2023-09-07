// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {{onBrokenLinks: string, baseUrl: string, presets: [string,Options][], organizationName: string, favicon: string, tagline: string, themeConfig: ThemeConfig & UserThemeConfig & AlgoliaThemeConfig, title: string, projectName: string, url: string, onBrokenMarkdownLinks: string, i18n: {defaultLocale: string, locales: string[], localeConfigs: {"zh-Hans": {htmlLang: string, label: string, direction: string}, en: {htmlLang: string, label: string, direction: string}}}}} */
const config = {
    title: 'Fydetab Duo Wiki ',
    tagline: 'Wiki',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://fydeos.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/fydetabduo-wiki/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'FydeOS', // Usually your GitHub org/user name.
    projectName: 'fydetabduo-wiki', // Usually your repo name.

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['zh-Hans', 'en'],
        localeConfigs: {

            'zh-Hans': {
                direction: 'ltr',
                htmlLang: 'zh-Hans',
                label: '简体中文',

            },
            en: {
                htmlLang: 'en-GB',
                label: 'English',
                direction: 'ltr',
            },
        },
    },


    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    //注销
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Lorde627/fydetab-wiki-dev/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                },
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
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
            navbar: {
                title: 'Fydetab Duo Wiki',
                logo: {
                    alt: 'Fydetab Duo Wiki Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',

                        label: 'Docs',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Intro',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Find Us @',
                        items: [
                            {
                                label: 'Business Contact',
                                href: 'mailto:hi@fydeos.io',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/Qv3kxGeMJQ',
                            },
                            {
                                label: 'Reddit',
                                href: 'https://www.reddit.com/r/fydeos/',
                            },
                            {
                                label: 'Telegram Group',
                                href: 'https://t.me/hi_fydeos',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/FydeOS',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} FydeOS Innovations, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};


module.exports = config;
