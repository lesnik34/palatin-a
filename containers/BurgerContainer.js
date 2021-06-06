import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import Burger from '../components/Burger/Burger';
import styles from '../components/Burger/Burger.module.scss';
import { toggleBurgerMenu } from '../store/slices/settings';

const BurgerContainer = () => {
    const { isBurgerMenuVisible } = useSelector(state => state.settings);
    const { routes, global } = useSelector(state => state.content);
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

    const getRoutes = () => routes.map(route => (
        <li className={styles.item} key={route.id}>
            <Link href={`/services/${route.slug}`}>
                <a className={styles.link} onClick={clickHandler}>
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