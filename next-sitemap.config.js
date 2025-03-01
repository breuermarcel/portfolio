/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cv.marcel-breuer.net',
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