const getRightImage = (image, settings) => {
    const {
        isDesktop,
        isTablet,
        isRetina
    } = settings;

    if (isDesktop && isRetina) {
        return image.desktopImageRetina ? image.desktopImageRetina : {};
    } if (isDesktop) {
        return image.desktopImage ? image.desktopImage : {};
    } if (isTablet && isRetina) {
        return image.tabletImageRetina ? image.tabletImageRetina : {};
    } if (isTablet) {
        return image.tabletImage ? image.tabletImage : {};
    } if (isRetina) {
        return image.mobileImageRetina ? image.mobileImageRetina : {};
    }
    return image.mobileImage ? image.mobileImage : {};

};

export default getRightImage;