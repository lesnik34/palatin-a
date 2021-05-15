import { MIN_SCREEN_WIDTH, MIN_TABLET_WIDTH } from '../variables/variables'

export const isDesktopWidth = () => {
    return window.matchMedia(`(min-width: ${MIN_SCREEN_WIDTH}px)`).matches;
};
export const isTabletWidth = () => {
    return window.matchMedia(`(min-width: ${MIN_TABLET_WIDTH}px)`).matches;
};

export const isRetina = () => {
    return window.matchMedia('(min-resolution: 2dppx)');
}