import styles from './Intro.module.scss';

const Intro = (props) => {
    const {
        getAdvantages
    } = props;
    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Почему мы?</h2>

                        <p className={styles.description}>
                            Обладая всей необходимой техникой, современным новейшим
                            оборудованием и колоссальным опытом, мы даем гарантию
                            наивысшего качества по всем предоставляемым услугам.
                        </p>
                    </div>

                    <ol className={styles.list}>
                        { getAdvantages() }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Intro;