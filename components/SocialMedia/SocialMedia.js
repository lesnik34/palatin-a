import { LOCALE } from '../../variables/variables';
import styles from './styles.module.scss';

const Preview = (props) => {
    const { locale } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>
                            {locale === LOCALE.ru ? 'Мы в соцсетях' : 'We are on social networks'}
                        </h2>

                        <p className={styles.description}>
                            {
                                locale === LOCALE.ru
                                    ? 'Подписывайтесь, чтобы быть в курсе новостей'
                                    : 'Subscribe to stay up to date with the latest news'
                            }
                        </p>

                        <div className={styles.buttonWrapper}>
                            <a
                                href="https://t.me/PalatinAzov"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.telegram}
                            >
                                <div className={styles.icon}>
                                    <div className={styles.telegramIcon} />

                                    Telegram
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
