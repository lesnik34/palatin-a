import { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { LOCALE } from '../variables/variables';
import imageLoader from '../utils/imageLoader';
import getRightImage from '../utils/getRightImage';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const JumbotronContainer = () => {
    const { jumbotron } = useSelector((state) => state.content, shallowEqual);
    const settings = useSelector((state) => state.settings, shallowEqual);

    const textLocale = {
        [LOCALE.en]: {
            title: jumbotron.localizations[0].title,
            description: jumbotron.localizations[0].description,
        },
        [LOCALE.ru]: {
            title: jumbotron.title,
            description: jumbotron.description,
        }
    };

    const renderImages = useCallback(
        (styles) =>
            jumbotron.images?.map((image) => (
                <div key={image.id} className={styles['image-item']}>
                    <img
                        className={styles.image}
                        src={imageLoader(getRightImage(image, settings).url, settings)}
                        draggable={false}
                        alt="Промо изображения"
                    />
                </div>
                // eslint-disable-next-line react-hooks/exhaustive-deps
            )),
        [settings.isMobile, settings.isTablet, settings.isDesktop]
    );

    return (
        <Jumbotron
            renderImages={renderImages}
            title={textLocale[settings.locale].title}
            description={textLocale[settings.locale].description}
        />
    );
};

export default JumbotronContainer;
