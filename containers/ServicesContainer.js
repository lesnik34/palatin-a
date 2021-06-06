import { useSelector } from 'react-redux';
import Image from 'next/image';

import Services from '../components/Services/Services';
import getRightImage from '../utils/getRightImage';
import styles from '../components/Services/Services.module.scss';

const ServicesContainer = () => {
    const { services } = useSelector(state => state.content);
    const settings = useSelector(state => state.settings);

    const getItems = () => services.images.map(image => (
        <div key={image.id} className={styles.item}>
            <div className={styles.imageWrap}>
                <Image
                    className={styles.image}
                    src={getRightImage(image, settings).url}
                    alt={image.imageName}
                    width={getRightImage(image, settings).width}
                    height={getRightImage(image, settings).height}
                />
            </div>
        </div>
    ));

    return <Services
        title={services.title}
        description={services.description.html}
        getItems={getItems}
    />;
};

export default ServicesContainer;