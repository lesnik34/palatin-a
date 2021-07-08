import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import styles from './Navigation.module.scss';

const Navigation = (props) => {
    const {
        isDropdownVisible,
        dropdownHandler,
        Dropdown,
        getRightColor,
    } = props;

    return (
        <div className={styles.main}>
            <ul itemScope itemType="http://schema.org/SiteNavigationElement" className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a itemProp="url" className={`${styles.link} default-hover ${getRightColor()}`}>
                            Главная
                        </a>
                    </Link>
                </li>

                <li className={styles.item}>
                    <button
                        type="button"
                        className={`${styles.button} default-hover ${getRightColor()}`}
                        onClick={dropdownHandler}
                    >
                        Наши услуги
                    </button>

                    <CSSTransition
                        in={isDropdownVisible}
                        classNames={{
                            enterActive: styles['anim-enter'],
                            enterDone: styles['anim-enter-done'],
                            exitActive: styles['anim-exit'],
                            exitDone: styles['anim-exit-done']
                        }}
                        timeout={{
                            enter: 800,
                            exit: 500
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <ul className={styles.dropdown}>
                            <Dropdown />
                        </ul>
                    </CSSTransition>
                </li>

                <li className={styles.item}>
                    <Link href="/contacts">
                        <a itemProp="url" className={`${styles.link} default-hover ${getRightColor()}`}>
                            Контакты
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;