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
                    imageName,
                    mobileImage {
                        url
                    },
                    mobileImageRetina {
                        url
                    },
                    tabletImage {
                        url
                    },
                    tabletImageRetina {
                        url
                    },
                    desktopImage {
                        url
                    },
                    desktopImageRetina {
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
                images {
                    id,
                    imageName,
                    mobileImage {
                        url
                    },
                    mobileImageRetina {
                        url
                    },
                    tabletImage {
                        url
                    },
                    tabletImageRetina {
                        url
                    },
                    desktopImage {
                        url
                    },
                    desktopImageRetina {
                        url
                    }
                }
            }
        }`
    )

    return previews;
}

export const getPartners = async () => {
    const { partners } = await graphcms.request(
        `{
            partners (stage: PUBLISHED) {
                id,
                company,
                companyImage {
                    url
                },
                companyUrl
            }
        }`
    )

    return partners;
}

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
    )

    return positions;
}