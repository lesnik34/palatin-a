import Link from 'next/link';

import { LOCALE } from '../../variables/variables';
import styles from './Preview.module.scss';

const Preview = (props) => {
    const { getPreviews, locale } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles.title}>
                            {locale === LOCALE.ru ? 'Предоставляемые услуги' : 'Services'}
                        </h2>
                    </div>

                    <ul className={styles.list}>{getPreviews(styles)}</ul>

                    <div className={styles.other}>
                        <h2 className={styles['other-title']}>
                            {locale === LOCALE.ru ? 'Другие услуги' : 'Other services'}
                        </h2>

                        <p className={styles['other-description']}>
                            {locale === LOCALE.ru
                                ? 'Мы так же оказываем и другие услуги, которые вы можете оговорить с нами лично в офисе, либо используя любой другой, удобный для вас способ связи'
                                : 'We also provide other services that you can negotiate with us personally at the office, or using any other convenient way of communication for you.'}
                        </p>

                        <Link href="/contacts">
                            <a className={styles.button}>{locale === LOCALE.ru ? 'Контакты' : 'Contacts'}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
