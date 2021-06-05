const getRightImage = (image, settings) => {
    const {
        isDesktop,
        isTablet,
        isRetina
    } = settings;

    if (isDesktop && isRetina) {
        return image.desktopImageRetina ? image.desktopImageRetina.url : '';
    } if (isDesktop) {
        return image.desktopImage ? image.desktopImage.url : '';
    } if (isTablet && isRetina) {
        return image.tabletImageRetina ? image.tabletImageRetina.url : '';
    } if (isTablet) {
        return image.tabletImage ? image.tabletImage.url : '';
    } if (isRetina) {
        return image.mobileImageRetina ? image.mobileImageRetina.url : '';
    }
    return image.mobileImage ? image.mobileImage.url : '';

};

export default getRightImage;