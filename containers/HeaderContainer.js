import { useDispatch, useSelector } from 'react-redux';

import { toggleBurgerMenu } from '../store/slices/settings';
import Header from '../components/Header/Header';

const HeaderContainer = () => {
    const { isBurgerMenuVisible } = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(toggleBurgerMenu());
    };

    const getBurgerClass = (styles) => {
        if (isBurgerMenuVisible) {
            return styles.active;
        }
        return styles.hidden;
    };

    return <Header
        burgerVision={isBurgerMenuVisible}
        toggleHandler={toggleHandler}
        getBurgerClass={getBurgerClass}
    />;
};

export default HeaderContainer;