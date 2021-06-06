import { useSelector } from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';

import Services from '../components/Services/Services';
import getRightImage from '../utils/getRightImage';
import styles from '../components/Services/Services.module.scss';

const ServicesContainer = () => {
    const { services } = useSelector(state => state.content);
    const settings = useSelector(state => state.settings);
    const [ modal, setModal ] = useState(null);
    const [ vision, setVision ] = useState(false);

    const openHandler = (image) => {
        setModal(image);
        setVision(true);
        document.body.style.overflow = 'hidden';
    };

    const closeHandler = () => {
        setVision(false);
        document.body.style.overflow = 'auto';
    };

    const getItems = () => services.images.map(image => {
        const currentImage = getRightImage(image, settings);

        return (
            <div key={image.id} className={styles.item}>
                <div className={styles.imageWrap}>
                    <Image
                        className={styles.image}
                        src={currentImage.url}
                        alt={image.imageName}
                        width={currentImage.width}
                        height={currentImage.height}
                        onClick={() => openHandler(currentImage)}
                    />
                </div>
            </div>
        );
    });

    return <Services
        title={services.title}
        description={services.description.html}
        getItems={getItems}
        modal={modal}
        vision={vision}
        closeHandler={closeHandler}
    />;
};

export default ServicesContainer;