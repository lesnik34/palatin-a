import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Link from 'next/link';

import { LOCALE } from '../variables/variables';
import Burger from '../components/Burger/Burger';
import styles from '../components/Burger/Burger.module.scss';
import { toggleBurgerMenu, setLocale } from '../store/slices/settings';

const BurgerContainer = () => {
    const { isBurgerMenuVisible, locale } = useSelector(state => state.settings, shallowEqual);
    const { routes, global } = useSelector(state => state.content, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isBurgerMenuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isBurgerMenuVisible]);

    const clickHandler = () => {
        dispatch(toggleBurgerMenu());
    };

    const localeHandler = () => {
        if (locale === LOCALE.en) {
            localStorage.setItem('locale', LOCALE.ru);
            dispatch(setLocale(LOCALE.ru));
        }
        if (locale === LOCALE.ru) {
            localStorage.setItem('locale', LOCALE.en);
            dispatch(setLocale(LOCALE.en));
        }
    };

    const getRoutes = () => routes.map(route => (
        <li className={styles.item} key={route.id}>
            <Link href={`/services/${route.slug}`}>
                <a itemProp="url" className={styles.link} onClick={clickHandler}>
                    {LOCALE.ru === locale ? route.title : route.localizations[0].title}
                </a>
            </Link>
        </li>
    ));

    return <Burger
        vision={isBurgerMenuVisible}
        getRoutes={getRoutes}
        global={global}
        clickHandler={clickHandler}
        locale={locale}
        localeHandler={localeHandler}
    />;
};

export default BurgerContainer;