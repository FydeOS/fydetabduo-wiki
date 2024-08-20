// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {{onBrokenLinks: string, baseUrl: string, presets: [string,Options][], organizationName: string, favicon: string, tagline: string, themeConfig: ThemeConfig & UserThemeConfig & AlgoliaThemeConfig, title: string, projectName: string, url: string, onBrokenMarkdownLinks: string, i18n: {defaultLocale: string, locales: string[], localeConfigs: {"zh-Hans": {htmlLang: string, label: string, direction: string}, en: {htmlLang: string, label: string, direction: string}}}}} */
const config = {
    title: 'Fydetab Duo Wiki',
    tagline: 'Wiki',
    favicon: 'img/logo.svg',
    url: 'https://wiki.fydetabduo.com',
    baseUrl: '/',
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
    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                createRedirects(existingPath) {
                    // 示例：去除"/wiki/category"前缀，但保留后续路径
                    if (existingPath.startsWith('/wiki/category/')) {
                        return [existingPath.replace('/wiki/category', '/wiki')];
                    }
                    return [];

                },
            },
        ],
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en", "zh"], // 可以根据你的需求添加或修改语言
                indexDocs: true,
                indexBlog: false,
                indexPages: true,
                docsRouteBasePath: "/",
            },
        ],
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/FydeOS/fydetabduo-wiki/tree/main/',
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
        image: 'img/fydeos-social-card.png',
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
        },
    },
};

function getCopyrightText(locale) { if (locale === 'zh-Hans') {
    return `版权所有 © ${new Date().getFullYear()} 燧炻创新；保留一切权利。`;
} else {
    return `Copyright © ${new Date().getFullYear()} Fyde Innovations, Inc. All rights reserved`;
}
}

function getFooterLinks(locale) {
    if (locale === 'zh-Hans') {
        return [
            {
                title: '信息',
                items: [
                    {
                        label: '下载',
                        href: 'https://fydeos.com/download/',
                    },
                    {
                        label: '解决方案',
                        href: 'https://admin.fydeos.com/',
                    },
                    {
                        label: '查看定价',
                        href: 'https://fydeos.com/pricing/',
                    },
                    {
                        label: '获取帮助',
                        href: 'https://fydeos.com/pricing/',
                    },
                    {
                        label: '隐私条款',
                        href: 'https://fydeos.com/privacy/',
                    },
                    {
                        label: '服务协议',
                        href: 'https://fydeos.com/terms/',
                    },
                ],
            },
            {
                title: '服务',
                items: [
                    {
                        label: '账号',
                        href: 'https://account.fydeos.com/',
                    },
                    {
                        label: '中文社区',
                        href: 'https://community.fydeos.com/',
                    },
                    {
                        label: '品牌标识',
                        href: 'https://fydeos.com/vi-guidelines/',
                    },
                    {
                        label: 'openFyde',
                        href: 'https://openfyde.cn/',
                    },{
                        label: '工作机会',
                        href: 'https://fydeos.com/career',
                    },
                ],
            },
            {
                title: '找到我们',
                items: [
                    {
                        label: '微信公众号',
                        href: 'https://mp.weixin.qq.com/s/ChEgxvRqCivefcFEsoIWkg',
                    },
                    {
                        label: '知乎',
                        href: 'https://www.zhihu.com/org/fydeos',
                    },
                    {
                        label: 'Bilibili',
                        href: 'https://space.bilibili.com/13962567',
                    },
                    {
                        label: '微博',
                        href: 'https://weibo.com/7792821678',
                    },
                    {
                        label: '商务合作',
                        href: 'mailto:hi@fydeos.io',
                    },
                ],
            }
        ];
    } else {
        return [
            {
                title: 'Info',
                items: [
                    {
                        label: 'Download',
                        href: 'https://fydeos.io/download/',
                    },
                    {
                        label: 'Enterprise',
                        href: 'https://fydeos.io/enterprise-solution/',
                    },
                    {
                        label: 'Pricing',
                        href: 'https://fydeos.io/pricing/',
                    },
                    {
                        label: 'Help',
                        href: 'https://fydeos.io/help/',
                    },
                    {
                        label: 'Privacy',
                        href: 'https://fydeos.io/privacy/',
                    },
                    {
                        label: 'Terms',
                        href: 'https://fydeos.io/terms/',
                    },
                ],
            },
            {
                title: 'Service',
                items: [
                    {
                        label: 'Account',
                        href: 'https://account.fydeos.io/',
                    },
                    {
                        label: 'Community',
                        href: 'https://community.fydeos.io/',
                    },
                    {
                        label: 'Blog',
                        href: 'https://fydeos.io/blog',
                    },
                    {
                        label: 'Press',
                        href: 'https://fydeos.io/vi-guidelines/',
                    },
                    {
                        label: 'openFyde',
                        href: 'https://openfyde.io/',
                    },
                ],
            },
            {
                title: 'Find US @',
                items: [
                    {
                        label: 'Telegram group',
                        href: 'https://t.me/hi_fydeos',
                    },
                    {
                        label: 'Discord server',
                        href: 'https://discord.gg/Qv3kxGeMJQ',
                    },
                    {
                        label: 'r/FydeOS',
                        href: 'https://www.reddit.com/r/hi_fydeos/',
                    },
                    {
                        label: 'Youtube',
                        href: 'https://www.youtube.com/channel/UCC5RcmZwxIqcPDjgArxpbOQ',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/FydeOS',
                    },
                    {
                        label: 'Linkedln',
                        href: 'https://www.linkedin.com/company/fyde-innovations',
                    },
                    {
                        label: 'Business contact',
                        href: 'mailto:hi@fydeos.io',
                    },
                ],
            }

        ];

    }

}

module.exports = config;
