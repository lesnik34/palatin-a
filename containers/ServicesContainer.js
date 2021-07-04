import { useSelector } from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';

import Services from '../components/Services/Services';
import styles from '../components/Services/Services.module.scss';

const ServicesContainer = () => {
    const { services } = useSelector(state => state.content);
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

    const getItems = () => services.images.map(image => (
        <div key={image.id} className={styles.item}>
            <div className={styles.imageWrap}>
                { image.url && (
                    <Image
                        className={styles.image}
                        src={image.url}
                        quality="60"
                        alt="Наши склады"
                        draggable={false}
                        layout="fill"
                        onClick={() => openHandler(image)}
                    />
                )}
            </div>
        </div>
    ));

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