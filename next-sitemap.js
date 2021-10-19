module.exports = {
    siteUrl: process.env.SITE_URL || 'https://palatin-a.com',
    generateRobotsTxt: true,
    additionalPaths: async (config) => [
        await config.transform(config, '/services/storages'),
        await config.transform(config, '/services/transport'),
    ],
};
