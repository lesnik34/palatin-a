import styles from './Footer.module.scss';

const Footer = (props) => {
    const {
        location,
        email,
        copyright,
        phones,
        inViewport,
        forwardedRef
    } = props;

    return (
        <div className={styles.footer} ref={forwardedRef}>
            <div className={styles.wrap}>
                <address itemScope itemType="http://schema.org/Organization" className={`${styles.wrapper} ${styles[inViewport]}`}>
                    <div
                        className={styles.location}
                        dangerouslySetInnerHTML={{ __html: location }}
                    />

                    <div className={styles.container}>
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

                    <small className={styles.copyright}>{copyright}</small>
                </address>
            </div>
        </div>
    );
};

export default Footer;