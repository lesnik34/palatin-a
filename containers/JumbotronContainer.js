import { useSelector } from 'react-redux';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import getRightImage from '../utils/getRightImage';

const JumbotronContainer = () => {
    const { jumbotron } = useSelector(state => state.content);
    const settings = useSelector(state => state.settings);

    const renderImages = (styles) => jumbotron.images ? jumbotron.images.map(image => (
        <div key={image.id} className={styles['image-item']}>
            <img
                className={styles.image}
                src={getRightImage(image, settings).url}
                alt={image.imageName}
            />
        </div>
    )): null;

    return <Jumbotron
        renderImages={renderImages}
        title={jumbotron.title}
        description={jumbotron.description}
    />;
};

export default JumbotronContainer;