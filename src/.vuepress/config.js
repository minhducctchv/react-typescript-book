const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Vuepress Docs Boilerplate',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'VuePress',
                link: 'https://v1.vuepress.vuejs.org'
            },
            {
                text: 'Content',
                items: [
                    {
                        text: 'Introduction',
                        link: '/content/introduction/'
                    },
                    {
                        text: 'Your First React and TypeScript Application: Building Trello with Drag and Drop',
                        link: '/content/your-first/'
                    },
                    {
                        text: 'How to Test Your Applications: Testing a Digital Goods Store',
                        link: '/content/how-to-test/'
                    },
                    {
                        text: 'Patterns in React TypeScript Applications: Making Music with React',
                        link: '/content/pattern/'
                    },
                    {
                        text: 'Using Redux and TypeScript',
                        link: '/content/redux/'
                    },
                    {
                        text: 'Static Site Generation and Server-Side Rendering Using Next.js',
                        link: '/content/next-js/'
                    },
                    {
                        text: 'GraphQL, React, and TypeScript',
                        link: '/content/graphql/'
                    },
                    {
                        text: 'Appendix',
                        link: '/content/appendix/'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'using-vue',
                    ]
                }
            ],
            '/content/introduction/': [
                {
                    title: 'Introduction',
                    collapsable: true,
                    children: [
                        '',
                        'how-to-get',
                        'typescript',
                        'why-use-typescript',
                        'necessary'
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
