import AliceCarousel from 'react-alice-carousel'
import cls from 'classnames'

import styles from './Partners.module.scss'

const Partners = (props) => {
    const {
        getPartners
    } = props;

    return (
        <div className={cls(styles['main'], 'partners')}>
            <div className='container'>
                <div className={styles['wrapper']}>
                    <div className={styles['title-wrapper']}>
                        <h2 className={styles['title']}>Наши партнеры</h2>
                    </div>

                    <div className={styles['slider']}>
                        <AliceCarousel
                            disableSlideInfo={true}
                            infinite={true}
                            mouseTracking={true}
                            animationDuration={700}
                        >
                            { getPartners(3, styles) }
                        </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;