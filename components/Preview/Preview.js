import styles from './Preview.module.scss'

const Preview = (props) => {
    const {
        getPreviews
    } = props;

    return (
        <div className={styles['main']}>
            <div className='container'>
                <div className={styles['wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles['title']}>Предоставляемые услуги</h2>
                    </div>

                    <ul className={styles['list']}>
                        { getPreviews(styles) }
                    </ul>

                    <div className={styles['other']}>
                        <h2 className={styles['other-title']}>Другие услуги</h2>

                        <p className={styles['other-description']}>
                            Мы так же оказываем и другие услуги, которые вы можете оговорить с нами
                            лично в офисе, либо используя любой другой, удобный для вас способ связи
                        </p>

                        <button className={styles['button']}>Контакты</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;