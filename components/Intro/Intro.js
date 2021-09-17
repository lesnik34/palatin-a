import { LOCALE } from '../../variables/variables';
import styles from './Intro.module.scss';

const Intro = (props) => {
    const { getAdvantages, locale } = props;
    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {locale === LOCALE.ru ? 'Почему мы?' : 'Why us?'}
                        </h2>

                        <p className={styles.description}>
                            {locale === LOCALE.ru
                                ? 'Обладая всей необходимой техникой, современным новейшим оборудованием и колоссальным опытом, мы даем гарантию наивысшего качества по всем предоставляемым услугам.'
                                : 'Possessing all the necessary equipment, modern state-of-the-art equipment and colossal experience, we give a guarantee of the highest quality for all services provided.' }
                        </p>
                    </div>

                    <ol className={styles.list}>{getAdvantages()}</ol>
                </div>
            </div>
        </div>
    );
};

export default Intro;
