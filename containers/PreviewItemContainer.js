import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import PreviewItem from '../components/PreviewItem/PreviewItem';
import imageLoader from '../utils/imageLoader';

const PreviewItemContainer = (props) => {
    const {
        preview,
        index,
        inViewport,
        forwardedRef
    } = props;

    const [ isDescriptionVisible, setDescriptionVision ] = useState(false);
    const isMobile = useSelector(state => state.settings.isMobile);
    const settings = useSelector((state) => state.settings, shallowEqual);

    const openHandler = () => {
        if (isMobile) {
            setDescriptionVision(true);
        };
    };

    const closeHandler = () => {
        setDescriptionVision(false);
    };

    const getRightClass = () => {
        if ((index + 1) % 3 === 0) {
            return 'second-type';
        }

        if ((index + 1) % 2 === 0) {
            return 'third-type';
        }

        return 'first-type';
    };

    const getVision = () => ({
        type: getRightClass(),
        viewport: inViewport ? 'in-view' : 'not-in-view',
        status: isDescriptionVisible ? 'description-visible' : 'promo-visible'
    });

    const customLoader = (params) => imageLoader(params, settings);

    return <PreviewItem
        openHandler={openHandler}
        closeHandler={closeHandler}
        forwardedRef={forwardedRef}
        vision={getVision()}
        customLoader={customLoader}
        preview={preview}
    />;
};

export default PreviewItemContainer;