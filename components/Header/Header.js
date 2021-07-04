import Link from 'next/link';
import {CSSTransition} from 'react-transition-group';
import Navigation from '../Navigation';

import styles from './Header.module.scss';

const Header = (props) => {
    const {
        toggleHandler,
        getBurgerClass,
        burgerVision,
        isMobile,
        getLogoIcons,
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={`${styles['full-logo']} ${styles[burgerVision]}`}>
                        <Link href="/">
                            <a className={styles.link}>
                                <img
                                    src={getLogoIcons().logo}
                                    alt="Company logo"
                                    className={styles.logo}
                                />
                            </a>
                        </Link>

                        <Link href="/">
                            <a className={styles.link}>
                                <img
                                    src={getLogoIcons().title}
                                    alt="Logo title"
                                    className={styles.title}
                                />
                            </a>
                        </Link>
                    </div>

                    { isMobile
                        ? (
                            <CSSTransition
                                in={burgerVision}
                                classNames={{
                                    enterActive: styles['anim-enter'],
                                    enterDone: styles['anim-enter-done'],
                                    exitActive: styles['anim-exit'],
                                    exitDone: styles['anim-exit-done']
                                }}
                                timeout={400}
                            >
                                <button
                                    type="button"
                                    className={`${styles.burger} ${getBurgerClass(styles)}`}
                                    onClick={toggleHandler}
                                >
                                    <div className={styles['burger-dot']} />
                                </button>
                            </CSSTransition>
                        )
                        : <Navigation />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;