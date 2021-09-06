import { IMAGES_SIZES } from '../variables/variables';

const imageLoader = ({ src }, settings) => {
    let device = 'desktop';
    const x = settings.isRetina ? 1.5 : 1;

    if (settings.isDesktop) {
        device = 'desktop';
    }

    if (settings.isTablet) {
        device = 'tablet';
    }

    if (settings.isMobile) {
        device = 'mobile';
    }
    return `${src.split('/').slice(0, 3).join('/')}/resize=w:${
  IMAGES_SIZES[device] * x
},fit:crop/quality=value:75/output=format:webp/compress/${src
    .split('/')
    .slice(3)}`;
};

export default imageLoader;