import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import { LOCALE } from '../../variables/variables';
import styles from './Navigation.module.scss';

const Navigation = (props) => {
    const { isDropdownVisible, dropdownHandler, Dropdown, getRightColor, locale, localeHandler } = props;

    return (
        <div className={styles.main}>
            <ul
                itemScope
                itemType="http://schema.org/SiteNavigationElement"
                className={styles.list}
            >
                <li className={styles.item}>
                    <Link href="/">
                        <a
                            itemProp="url"
                            className={`${styles.link} default-hover ${getRightColor()}`}
                        >
                            { locale === LOCALE.ru ? 'Главная' : 'Home' }
                        </a>
                    </Link>
                </li>

                <li className={styles.item}>
                    <button
                        type="button"
                        className={`${styles.button} default-hover ${getRightColor()}`}
                        onClick={dropdownHandler}
                    >
                        { locale === LOCALE.ru ? 'Наши услуги' : 'Our services' }
                    </button>

                    <CSSTransition
                        in={isDropdownVisible}
                        classNames={{
                            enterActive: styles['anim-enter'],
                            enterDone: styles['anim-enter-done'],
                            exitActive: styles['anim-exit'],
                            exitDone: styles['anim-exit-done'],
                        }}
                        timeout={{
                            enter: 800,
                            exit: 500,
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
                        <a
                            itemProp="url"
                            className={`${styles.link} default-hover ${getRightColor()}`}
                        >
                            { locale === LOCALE.ru ? 'Контакты' : 'Contacts' }
                        </a>
                    </Link>
                </li>

                <li className={styles.item}>
                    <button
                        className={`${styles.button} default-hover ${getRightColor()} ${
                            styles.locale
                        }`}
                        type="button"
                        onClick={localeHandler}
                    >
                        <span className={LOCALE.ru === locale ? styles.localeActive : ''}>
                            ru
                        </span>
                        /
                        <span className={LOCALE.en === locale ? styles.localeActive : ''}>
                            en
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
