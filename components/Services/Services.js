import AliceCarousel from 'react-alice-carousel';

import styles from './Services.module.scss';

const Services = (props) => {
    const {
        title,
        description,
        getItems
    } = props;

    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>{title}</h1>

                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{__html: description}}
                    />

                    <div className={`${styles.list} services`}>
                        <AliceCarousel
                            disableSlideInfo
                            infinite
                            mouseTracking
                            animationDuration={700}
                        >
                            { getItems() }
                        </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;