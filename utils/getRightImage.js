export const getRightImage = (image, settings) => {
    const {
        isDesktop,
        isTablet,
        isRetina
    } = settings;

    if (isDesktop && isRetina) {
        return image.desktopImageRetina ? image.desktopImageRetina.url : '';
    } else if (isDesktop) {
        return image.desktopImage ? image.desktopImage.url : '';
    } else if (isTablet && isRetina) {
        return image.tabletImageRetina ? image.tabletImageRetina.url : '';
    } else if (isTablet) {
        return image.tabletImage ? image.tabletImage.url : '';
    } else if (isRetina) {
        return image.mobileImageRetina ? image.mobileImageRetina.url : '';
    } else {
        return image.mobileImage ? image.mobileImage.url : '';
    }
}