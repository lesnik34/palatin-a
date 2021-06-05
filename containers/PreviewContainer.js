import { useSelector } from 'react-redux';
import handleViewport from 'react-in-viewport';

import Preview from '../components/Preview/Preview';
import PreviewItem from '../components/PreviewItem';

const PreviewContainer = () => {
    const { previews } = useSelector(state => state.content);

    const getPreviews = () => previews.map((preview, index) => {
        const ViewPortBlock = handleViewport(PreviewItem, { rootMargin: '-150px' });
        return <ViewPortBlock key={preview.id} preview={preview} index={index} />;
    });

    return <Preview
        getPreviews={getPreviews}
    />;
};

export default PreviewContainer;