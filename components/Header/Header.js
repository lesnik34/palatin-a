import Link from 'next/link';
import {CSSTransition} from 'react-transition-group';

import styles from './Header.module.scss';

const Header = (props) => {
    const {
        toggleHandler,
        getBurgerClass,
        burgerVision
    } = props;

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles['full-logo']}>
                        <Link href="/">
                            <a className={styles.link}>
                                <img
                                    src="/img/svg/logo.svg"
                                    alt="Company logo"
                                    className={styles.logo}
                                />
                            </a>
                        </Link>

                        <Link href="/">
                            <a className={styles.link}>
                                <img
                                    src="/img/svg/logo-title.svg"
                                    alt="Logo title"
                                    className={styles.title}
                                />
                            </a>
                        </Link>
                    </div>

                    <CSSTransition
                        in={burgerVision}
                        classNames={{
                            enterActive: styles['anim-enter'],
                            exitActive: styles['anim-exit'],
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
                </div>
            </div>
        </div>
    );
};

export default Header;