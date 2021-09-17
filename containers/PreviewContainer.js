import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import handleViewport from 'react-in-viewport';

import Preview from '../components/Preview/Preview';
import PreviewItem from '../components/PreviewItem';

const PreviewContainer = () => {
    const { previews } = useSelector(state => state.content);
    const { isMobile, isTablet, isDesktop, locale } = useSelector(state => state.settings);

    const getPreviews = useCallback(() => previews.map((preview, index) => {
        const ViewPortBlock = handleViewport(PreviewItem, { rootMargin: '-80px' });
        return <ViewPortBlock key={preview.id} preview={preview} index={index} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [isMobile, isTablet, isDesktop, locale]);

    return <Preview
        getPreviews={getPreviews}
        locale={locale}
    />;
};

export default PreviewContainer;