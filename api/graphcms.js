import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckobpba2bu4ww01z1caqtdcxp/master',
);

export const getJumbotron = async () => {
    const { jumbotrons } = await graphcms.request(
		`{
            jumbotrons(stage: PUBLISHED) {
                title,
                description,
                images {
                    id,
                    vertical {
                        url
                    },
                    horizontal {
                        url
                    }
                }
            }
        }`,
    );

    return jumbotrons[0];
};

export const getAdvantages = async () => {
    const { advantages } = await graphcms.request(
		`{
            advantages (stage: PUBLISHED) {
                id,
                title,
                description
            }
        }`,
    );

    return advantages;
};

export const getPreview = async () => {
    const { previews } = await graphcms.request(
        `{
            previews (stage: PUBLISHED) {
                id,
                title,
                description,
                image {
                    id,
                    url
                }
            }
        }`
    );

    return previews;
};

export const getPartners = async () => {
    const { partners } = await graphcms.request(
        `{
            partners (stage: PUBLISHED, orderBy: rating_DESC) {
                id,
                company,
                companyImage {
                    id,
                    url
                },
                companyUrl
            }
        }`
    );

    return partners;
};

export const getPositions = async () => {
    const { positions } = await graphcms.request(
        `{
            positions (stage: PUBLISHED) {
                id,
                title,
                navigator,
                description,
                vision,
                location {
                    latitude,
                    longitude
                }
            }
        }`
    );

    return positions;
};

export const getGlobal = async () => {
    const { globals } = await graphcms.request(
        `{
            globals (stage: PUBLISHED) {
                id,
                company,
                location {
                    html
                },
                email,
                phoneNumbers {
                    html
                },
                logo {
                    id,
                    url
                },
                copyright,
                ogTitle,
                ogDescription,
                ogImage {
                    url
                },
                metaTitle,
                metaDescription,
                metaKeywords,
                contactPhone,
            }
        }`
    );

    return globals[globals.length - 1];
};

export const getRoutes = async () => {
    const { services } = await graphcms.request(
        `{
            services (stage: PUBLISHED) {
                id,
                title,
                slug
            }
        }`
    );

    return services;
};

export const getServices = async (id) => {
    const { service } = await graphcms.request(
        `{
            service (stage: PUBLISHED, where: { slug: "${id}" }) {
                id,
                title,
                slug,
                description { html },
                images {
                    id,
                    url
                }
            }
        }`
    );

    return service;
};