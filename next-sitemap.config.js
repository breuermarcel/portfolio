/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://marcel-breuer.net',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: '/',
            },
        ]
    },
};