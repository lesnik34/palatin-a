import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

import styles from './Services.module.scss';

const Services = (props) => {
    const {
        title,
        description,
        getItems,
        modal,
        vision,
        closeHandler
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
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

                    <CSSTransition
                        in={vision}
                        unmountOnExit
                        mountOnEnter
                        classNames={{
                            enterActive: styles['anim-enter'],
                            enterDone: styles['anim-enter-done'],
                            exitActive: styles['anim-exit'],
                            exitDone: styles['anime-exit-done']
                        }}
                        timeout={{
                            enter: 600,
                            exit: 600
                        }}
                    >
                        <div className={styles.modal}>
                            <div className={styles.modalImageWrap}>
                                <Image
                                    className={styles.modalImage}
                                    src={modal?.url}
                                    layout="fill"
                                    alt="Наши склады"
                                    title="Наши склады"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={closeHandler}
                                aria-label="Close image"
                                className={styles.close}
                            />

                            <div className={styles.overlay} onClick={closeHandler} />
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
};

export default Services;