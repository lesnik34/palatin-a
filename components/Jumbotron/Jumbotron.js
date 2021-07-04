import { Parallax } from 'react-scroll-parallax';
import AliceCarousel from 'react-alice-carousel';

import styles from './Jumbotron.module.scss';

const Jumbotron = (props) => {
    const {
        renderImages,
        title,
        description
    } = props;

    return (
        <div className={styles.jumbotron}>
            <Parallax className={styles.parallax} y={[0, 12]}>
                <AliceCarousel
                    disableButtonsControls
                    disableDotsControls
                    disableSlideInfo
                    infinite
                    mouseTracking
                    autoPlay
                    autoPlayInterval={6000}
                    animationDuration={900}
                >
                    { renderImages(styles) }
                </AliceCarousel>
            </Parallax>

            <div className={styles.overlay} />

            <div className={styles.main}>
                <div className="container">
                    <div className={styles.background}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>{title}</h1>

                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;