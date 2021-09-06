import { useCallback } from 'react';
import Image from 'next/image';
import { useSelector, shallowEqual } from 'react-redux';

import imageLoader from '../utils/imageLoader';
import getRightImage from '../utils/getRightImage';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const JumbotronContainer = () => {
    const { jumbotron } = useSelector((state) => state.content, shallowEqual);
    const settings = useSelector((state) => state.settings, shallowEqual);

    const customLoader = (params) => imageLoader(params, settings);

    const renderImages = useCallback(
        (styles) =>
            jumbotron.images?.map((image) => (
                <div key={image.id} className={styles['image-item']}>
                    <Image
                        className={styles.image}
                        src={getRightImage(image, settings).url}
                        draggable={false}
                        alt="Промо изображения"
                        title="Промо изображения"
                        loader={customLoader}
                        placeholder="blur"
                        layout="fill"
                    />
                </div>
                // eslint-disable-next-line react-hooks/exhaustive-deps
            )),
        [settings.isMobile, settings.isTablet, settings.isDesktop]
    );

    return (
        <Jumbotron
            renderImages={renderImages}
            title={jumbotron.title}
            description={jumbotron.description}
        />
    );
};

export default JumbotronContainer;
