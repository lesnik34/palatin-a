import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import getScalingFactor from '../../utils/getScalingFactor'
import { setDesktop, setTablet, setMobile, setRetina } from '../../store/slices/settings'
import { isRetina, isDesktopWidth, isTabletWidth } from '../../utils/scales';

const Resize = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [])

    const resizeHandler = () => {
        const root = document.documentElement;

        if (isDesktopWidth()) {
            dispatch(setDesktop());
        } else if (isTabletWidth()) {
            dispatch(setTablet());
        } else {
            dispatch(setMobile());
        }

        if (isRetina()) {
            dispatch(setRetina(true));
        } else {
            dispatch(setRetina(false));
        }

        root.style.setProperty('--sf', getScalingFactor());
    }

    return null
}

export default Resize;