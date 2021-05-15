import { useState } from 'react'
import { useSelector } from 'react-redux'

import PreviewItem from "../components/PreviewItem/PreviewItem";
import { getRightImage } from '../utils/getRightImage'

const PreviewItemContainer = (props) => {
    const {
        preview,
        index
    } = props;

    const [ isDescriptionVisible, setDescriptionVision ] = useState(false);

    const settings = useSelector(state => state.settings);

    const openHandler = () => {
        setDescriptionVision(true);
    }

    const closeHandler = () => {
        setDescriptionVision(false);
    }

    const getRightClass = () => {
        if ((index + 1) % 3 === 0) {
            return 'third-type';
        }

        if ((index + 1) % 2 === 0) {
            return 'second-type';
        }

        return 'first-type';
    }

    return <PreviewItem
        preview={preview}
        rightClass={getRightClass()}
        openHandler={openHandler}
        closeHandler={closeHandler}
        visionClass={isDescriptionVisible ? 'description-visible' : 'promo-visible'}
        image={getRightImage(preview.images[0], settings)}
    />
}

export default PreviewItemContainer;