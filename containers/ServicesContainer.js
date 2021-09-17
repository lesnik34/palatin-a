import { useSelector, shallowEqual } from 'react-redux';
import { useState } from 'react';

import { LOCALE } from '../variables/variables';
import imageLoader from '../utils/imageLoader';
import Services from '../components/Services/Services';
import styles from '../components/Services/Services.module.scss';

const ServicesContainer = () => {
    const { services } = useSelector((state) => state.content, shallowEqual);
    const settings = useSelector((state) => state.settings, shallowEqual);
    const [modal, setModal] = useState(null);
    const [vision, setVision] = useState(false);

    const openHandler = (image) => {
        setModal(image);
        setVision(true);
        document.body.style.overflow = 'hidden';
    };

    const closeHandler = () => {
        setVision(false);
        document.body.style.overflow = 'auto';
    };

    const getItems = () =>
        services.images.map((image) => (
            <div key={image.id} className={styles.item}>
                <div className={styles.imageWrap}>
                    {image.url && (
                        <img
                            className={styles.image}
                            src={imageLoader(image.url, settings)}
                            alt="Наши склады"
                            draggable={false}
                            onClick={() => openHandler(image)}
                        />
                    )}
                </div>
            </div>
        ));

    return (
        <Services
            title={
                settings.locale === LOCALE.ru
                    ? services.title
                    : services.localizations[0].title
            }
            description={
                settings.locale === LOCALE.ru
                    ? services.description.html
                    : services.localizations[0].description.html
            }
            getItems={getItems}
            modal={modal}
            vision={vision}
            closeHandler={closeHandler}
            isNotEmpty={services.images.length > 0}
        />
    );
};

export default ServicesContainer;
