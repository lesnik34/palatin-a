import { useMemo } from 'react';

import { LOCALE } from '../../variables/variables';
import styles from './Footer.module.scss';

const Footer = (props) => {
    const {
        location,
        locale,
        email,
        copyright,
        phones,
        inViewport,
        forwardedRef
    } = props;

    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className={styles.footer} ref={forwardedRef}>
            <div className={styles.wrap}>
                <address itemScope itemType="http://schema.org/Organization" className={`${styles.wrapper} ${styles[inViewport]}`}>
                    <div
                        className={styles.location}
                        dangerouslySetInnerHTML={{ __html: location }}
                    />

                    <div className={styles.container}>
                        <a
                            href="https://max.ru/join/pxu4D4YC8IfA8RAr-dpmPbWhpDY9wZ8QkBnP9yfACSA"
                            className={`${styles.telegram} usual-hover`}
                            itemProp="max"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {locale === LOCALE.ru ? 'Max-канал' : 'Max channel'}
                        </a>

                        <a
                            href="https://t.me/PalatinAzov"
                            className={`${styles.telegram} usual-hover`}
                            itemProp="telegram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {locale === LOCALE.ru ? 'Telegram-канал' : 'Telegram channel'}
                        </a>

                        <div
                            className={styles.phone}
                        >
                            {phones}
                        </div>

                        <a
                            href={`mailto: ${email}`}
                            className={`${styles.email} usual-hover`}
                            itemProp="email"
                        >
                            {email}
                        </a>
                    </div>

                    <small className={styles.copyright}>©{currentYear} {copyright}</small>
                </address>
            </div>
        </div>
    );
};

export default Footer;