import { LOCALE } from '../../variables/variables';
import styles from './Contacts.module.scss';

const Contacts = (props) => {
    const {
        email,
        phones,
        locale
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>{locale === LOCALE.ru ? 'Контакты' : 'Contacts'}</h1>

                    <p className={styles.description}>
                        {locale === LOCALE.ru ? 'Время работы офиса ежедневно с 9:00 до 17:00, кроме выходных дней (Суббота и Воскресенье)' : 'Office opening hours daily from 9:00 to 17:00, except weekends (Saturday and Sunday)'}
                    </p>

                    <div className={styles.container}>
                        <div className={styles.phones}>
                            {phones}
                        </div>

                        <div className={styles.emailWrapper}>
                            <a className={`${styles.email} default-hover`} href={`mailto:${email}`}>
                                {email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;