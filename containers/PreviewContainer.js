import { useSelector } from 'react-redux'

import Preview from '../components/Preview/Preview'
import PreviewItem from '../components/PreviewItem';

const PreviewContainer = () => {
    const { previews } = useSelector(state => state.content);

    const getPreviews = () => {
        return previews.map((preview, index) => {
            return <PreviewItem
                preview={preview}
                index={index}
            />
        })
    }

    return <Preview
        getPreviews={getPreviews}
    />
}

export default PreviewContainer;