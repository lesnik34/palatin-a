import { MIN_SCREEN_WIDTH, MIN_TABLET_WIDTH } from '../variables/variables';

export const isDesktopWidth = () => window.matchMedia(`(min-width: ${MIN_SCREEN_WIDTH}px)`).matches;
export const isTabletWidth = () => window.matchMedia(`(min-width: ${MIN_TABLET_WIDTH}px)`).matches;

export const isRetina = () => window.matchMedia('(min-resolution: 2dppx)');