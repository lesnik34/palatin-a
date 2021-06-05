import {CSSTransition} from 'react-transition-group';

import styles from './Burger.module.scss';

const Burger = (props) => {
    const {
        vision,
        getRoutes,
        global
    } = props;

    return (
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
                enter: 800,
                exit: 800
            }}
        >
            <div className={styles.burger}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <ul className={styles.list}>
                            { getRoutes() }
                        </ul>

                        <div className={styles.container}>
                            <a
                                href={`mailto:${global.email}`}
                                className={styles.email}
                            >
                                {global.email}
                            </a>

                            <div className={styles.logoWrap}>
                                <div
                                    className={styles.logo}
                                    style={{ backgroundImage: `url(${global.logo.url})` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Burger;