module.exports = {
    title: 'SEO Fields for Craft',
    base: '/craft-seo-fields',
    themeConfig: {

        logo: {light: '/icon-vuepress.svg', dark: '/icon-vuepress-light.svg'},
        sidebar: [
            {
                items: [
                    {text: 'General', link: '/general'},
                    {text: 'Field & settings', link: '/field'},
                    {text: 'Templating', link: '/templating'},
                    {text: 'Robots.txt', link: '/robots'},
                    {text: 'Sitemap.xml', link: '/sitemap'},
                    {text: 'Extra', link: '/extra'},
                ]
            },


        ],
        nav: [
            {
                text: 'Buy now',
                link: 'https://plugins.craftcms.com/seo-fields',
            },
            {
                text: 'Report an issue',
                link: 'https://github.com/studioespresso/craft-seo-fields/issues'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/studioespresso/craft-seo-fields/issues'
            }
        ]

    }
};