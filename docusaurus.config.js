// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {{onBrokenLinks: string, baseUrl: string, presets: [string,Options][], organizationName: string, favicon: string, tagline: string, themeConfig: ThemeConfig & UserThemeConfig & AlgoliaThemeConfig, title: string, projectName: string, url: string, onBrokenMarkdownLinks: string, i18n: {defaultLocale: string, locales: string[], localeConfigs: {"zh-Hans": {htmlLang: string, label: string, direction: string}, en: {htmlLang: string, label: string, direction: string}}}}} */
const config = {
    title: 'Fydetab Duo Wiki ',
    tagline: 'Wiki',
    favicon: 'img/favicon.ico',
    url: 'https://fydeos.github.io/',
    baseUrl: '/fydetabduo-wiki/',
    organizationName: 'FydeOS',
    projectName: 'fydetabduo-wiki',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
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
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/Lorde627/fydetab-wiki-dev/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }
        ],
    ],
    themeConfig: {
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
            ],
        },
        footer: {
            style: 'dark',
            links: getFooterLinks(process.env.DOCUSAURUS_CURRENT_LOCALE),
            copyright: getCopyrightText(process.env.DOCUSAURUS_CURRENT_LOCALE),
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};
function getCopyrightText(locale) {
    if (locale === 'zh-Hans') {
        return `版权所有 © ${new Date().getFullYear()} 燧炻创新；保留一切权利。`;
    } else {
        return `Copyright © ${new Date().getFullYear()} Fyde Innovations, Inc. All rights reserved`;
    }
}

function getFooterLinks(locale) {
    if (locale === 'zh-Hans') {
        return [
            {
                title: '文档',
                items: [
                    {
                        label: 'Fydetab Duo 介绍',
                        to: '/',
                    },
                ],
            },
            {
                title: '找到我们',
                items: [
                    {
                        label: '商务联系',
                        href: 'mailto:hi@fydeos.io',
                    },
                    {
                        label: 'FydeOS 社区',
                        href: 'https://community.fydeos.com/',
                    },
                    {
                        label: '微信公众号',
                        href: 'https://mp.weixin.qq.com/s/ChEgxvRqCivefcFEsoIWkg',
                    },
                    {
                        label: '知乎',
                        href: 'https://www.zhihu.com/org/fydeos',
                    },
                    {
                        label: '微博',
                        href: 'https://weibo.com/7792821678',
                    },
                ],
            },
            {
                title: '更多',
                items: [
                    {
                        label: 'Fydetab Duo 官网',
                        href: 'https://fydetabduo.cn/',
                    },
                    {
                        label: 'Made for FydeOS',
                        href: 'https://madeforfydeos.cn/',
                    },

    ],
            }
        ];
    } else {
        return [
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
                        label: 'GitHub',
                        href: 'https://github.com/FydeOS',
                    },
                ],
            }

        ];

    }
}

module.exports = config;
