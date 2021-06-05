import { useSelector } from 'react-redux';
import { v4 as key } from 'uuid';

import Partners from '../components/Partners/Partners';

const PartnersContainer = () => {
    const { partners } = useSelector(state => state.content);

    const getPartners = (count, styles) => {
        const itemList = [];
        const length = Math.floor(partners.length / count);

        for (let i = 0; i <= length; i++) {
            itemList.push((
                <ul key={key()} className={styles.list}>
                    {
                        partners.slice(i * count, i * count + count).map(partner => {
                            const {
                                id,
                                companyImage,
                                companyUrl
                            } = partner;
                            return (
                                <li key={id} className={styles.item}>
                                    <a className={styles.link} href={companyUrl} target="_blank" rel="noreferrer">
                                        <div
                                            className={styles.image}
                                            style={{backgroundImage: `url(${companyImage.url})`}}
                                        />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            ));
        }

        return itemList;
    };

    return <Partners
        getPartners={getPartners}
    />;
};

export default PartnersContainer;