import { useSelector } from 'react-redux';

import Burger from '../components/Burger/Burger';

const BurgerContainer = () => {
    const { isBurgerMenuVisible } = useSelector(state => state.settings);

    return <Burger
        vision={isBurgerMenuVisible}
    />;
};

export default BurgerContainer;