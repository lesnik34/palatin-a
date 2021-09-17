import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { setLocale } from '../store/slices/settings';
import { LOCALE } from '../variables/variables';
import styles from '../components/Navigation/Navigation.module.scss';
import Navigation from '../components/Navigation/Navigation';

const NavigationContainer = () => {
    const [ dropdown, setDropdown ] = useState(false);
    const { routes } = useSelector(state => state.content, shallowEqual);
    const { isDesktop, locale } = useSelector(state => state.settings, shallowEqual);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        setDropdown(false);
    }, [router.pathname]);

    const dropdownHandler = () => {
        setDropdown(state => !state);
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

    const getRightColor = () => {
        if (router.pathname === '/' && isDesktop) {
            return styles.white;
        }
        return styles.black;
    };

    const Dropdown = () => routes.map(route => (
        <li className={styles.subItem} key={route.id}>
            <Link href={`/services/${route.slug}`}>
                <a itemProp="url" className={`${styles.subLink} usual-hover`}>
                    { locale === LOCALE.ru ? route.title : route.localizations[0].title }
                </a>
            </Link>
        </li>
    ));

    return <Navigation
        isDropdownVisible={dropdown}
        dropdownHandler={dropdownHandler}
        Dropdown={Dropdown}
        getRightColor={getRightColor}
        locale={locale}
        localeHandler={localeHandler}
    />;
};

export default NavigationContainer;