import { useSelector } from 'react-redux'

import Partners from '../components/Partners/Partners'

const PartnersContainer = () => {
    const { partners } = useSelector(state => state.content);

    const getPartners = (count, styles) => {
        const itemList = [];
        const length = Math.floor(partners.length / count);

        for (let i = 0; i <= length; i++) {
            const key = ~(Math.random() * 10000);

            itemList.push((
                <ul key={key} className={styles['list']}>
                    {
                        partners.slice(i * count, i * count + count).map(partner => {
                            const {
                                id,
                                companyImage,
                                companyUrl
                            } = partner;
                            return (
                                <li key={id} className={styles['item']}>
                                    <a className={styles['link']} href={companyUrl}  target="_blank">
                                        <div
                                            className={styles['image']}
                                            style={{backgroundImage: `url(${companyImage.url})`}}
                                        />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            ))
        }

        return itemList
    }

    return <Partners
        getPartners={getPartners}
    />
}

export default PartnersContainer;