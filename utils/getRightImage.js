const getRightImage = (image, settings) => {
    const {
        isDesktop
    } = settings;

    if (isDesktop) {
        return image?.horizontal;
    }
    return image?.vertical;

};

export default getRightImage;