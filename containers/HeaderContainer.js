import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { toggleBurgerMenu } from '../store/slices/settings';
import Header from '../components/Header/Header';

const HeaderContainer = () => {
    const { isBurgerMenuVisible, isMobile, isDesktop } = useSelector(state => state.settings);
    const dispatch = useDispatch();
    const router = useRouter();

    const toggleHandler = () => {
        dispatch(toggleBurgerMenu());
    };

    const getBurgerClass = (styles) => {
        if (isBurgerMenuVisible) {
            return styles.active;
        }
        return styles.hidden;
    };

    const getLogoIcons = () => {
        if (isDesktop && router.pathname === '/') {
            return {
                logo: '/img/svg/logo-light.svg',
                title: '/img/svg/logo-title-light.svg',
            };
        }

        return {
            logo: '/img/svg/logo.svg',
            title: '/img/svg/logo-title.svg',
        };
    };

    return <Header
        burgerVision={isBurgerMenuVisible}
        toggleHandler={toggleHandler}
        getBurgerClass={getBurgerClass}
        getLogoIcons={getLogoIcons}
        isMobile={isMobile}
    />;
};

export default HeaderContainer;