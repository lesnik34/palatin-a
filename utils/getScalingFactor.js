import {
    DEFAULT_SCREEN_WIDTH,
    DEFAULT_TABLET_WIDTH,
    DEFAULT_MOBILE_WIDTH,
} from '../variables/variables'

import { isDesktopWidth, isTabletWidth } from './scales'

const getScalingFactor = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let defaultWidth = '';

    if (isDesktopWidth()) {
        defaultWidth = DEFAULT_SCREEN_WIDTH;
    } else if (isTabletWidth()) {
        defaultWidth = DEFAULT_TABLET_WIDTH;
    } else {
        defaultWidth = DEFAULT_MOBILE_WIDTH;
    }

    const screenWidthDifferenceRatio = screenWidth / defaultWidth;

    const widthScalingFactor = (100 / screenWidth) * screenWidthDifferenceRatio;
    return `${widthScalingFactor}vw`
};

export default getScalingFactor;