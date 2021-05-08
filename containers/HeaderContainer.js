import { useDispatch } from 'react-redux'

import { toggleBurgerMenu } from '../store/slices/settings'
import Header from '../components/Header/Header'

const HeaderContainer = () => {
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(toggleBurgerMenu());
    }

    return <Header
        toggleHandler={toggleHandler}
    />
}

export default HeaderContainer;