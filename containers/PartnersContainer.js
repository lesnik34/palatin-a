import { useSelector } from 'react-redux';
import { v4 as key } from 'uuid';

import Partners from '../components/Partners/Partners';

const PartnersContainer = () => {
    const { partners } = useSelector((state) => state.content);
    const { isMobile } = useSelector((state) => state.settings);

    const getCount = (number) => {
        if (isMobile) {
            return number;
        }
        return number * 2;
    };

    const LinkItem = ({ children, className, companyUrl, company }) => companyUrl ? (
        <a
            className={className}
            href={companyUrl}
            draggable={false}
            target="_blank"
            aria-label={`Компания ${company}`}
            rel="noreferrer"
        >
            {children}
        </a>
    ) : (
        <div className={className}>{children}</div>
    );

    const getPartners = (number, styles) => {
        const count = getCount(number);
        const itemList = [];
        const length = Math.floor(partners.length / count);

        for (let i = 0; i <= length; i++) {
            itemList.push(
                <ul key={key()} className={styles.list}>
                    {partners.slice(i * count, i * count + count).map((partner) => {
                        const { id, companyImage, companyUrl, company } = partner;
                        return (
                            <li key={id} className={styles.item}>
                                <LinkItem
                                    className={styles.link}
                                    companyUrl={companyUrl}
                                    company={company}
                                >
                                    {companyImage ? (
                                        <div
                                            className={styles.image}
                                            style={{ backgroundImage: `url(${companyImage.url})` }}
                                        />
                                    ) : (
                                        <div className={styles.company}>
                                            <span>{company}</span>
                                        </div>
                                    )}
                                </LinkItem>
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return itemList;
    };

    return <Partners getPartners={getPartners} />;
};

export default PartnersContainer;
