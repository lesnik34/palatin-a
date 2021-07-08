import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../components/Navigation/Navigation.module.scss';
import Navigation from '../components/Navigation/Navigation';

const NavigationContainer = () => {
    const [ dropdown, setDropdown ] = useState(false);
    const { routes } = useSelector(state => state.content);
    const { isDesktop } = useSelector(state => state.settings);
    const router = useRouter();

    useEffect(() => {
        setDropdown(false);
    }, [router.pathname]);

    const dropdownHandler = () => {
        setDropdown(state => !state);
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
                    {route.title}
                </a>
            </Link>
        </li>
    ));

    return <Navigation
        isDropdownVisible={dropdown}
        dropdownHandler={dropdownHandler}
        Dropdown={Dropdown}
        getRightColor={getRightColor}
    />;
};

export default NavigationContainer;