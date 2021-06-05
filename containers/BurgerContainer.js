import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import Burger from '../components/Burger/Burger';
import styles from '../components/Burger/Burger.module.scss';

const BurgerContainer = () => {
    const { isBurgerMenuVisible } = useSelector(state => state.settings);
    const { routes, global } = useSelector(state => state.content);

    useEffect(() => {
        if (isBurgerMenuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isBurgerMenuVisible]);

    const getRoutes = () => routes.map(route => (
        <li className={styles.item} key={route.id}>
            <Link href={`/services/${route.slug}`}>
                <a className={styles.link}>
                    {route.title}
                </a>
            </Link>
        </li>
    ));

    return <Burger
        vision={isBurgerMenuVisible}
        getRoutes={getRoutes}
        global={global}
    />;
};

export default BurgerContainer;