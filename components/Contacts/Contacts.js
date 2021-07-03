import styles from './Contacts.module.scss';

const Contacts = (props) => {
    const {
        email,
        phones
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>Контакты</h1>

                    <p className={styles.description}>
                        Время работы офиса ежедневно с 9:00 до 17:00,
                        кроме выходных дней (Суббота и Воскресенье)
                    </p>

                    <div className={styles.container}>
                        <div className={styles.phones} dangerouslySetInnerHTML={{__html: phones}} />

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