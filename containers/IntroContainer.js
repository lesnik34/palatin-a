import { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import handleViewport from 'react-in-viewport';

import { LOCALE } from '../variables/variables';
import Intro from '../components/Intro/Intro';
import AdvantageItem from '../components/AdvantageItem';

const IntroContainer = () => {
    const ViewportBlock = handleViewport(AdvantageItem, { rootMargin: '-100px' });
    const { advantages } = useSelector(state => state.content, shallowEqual);
    const locale = useSelector(state => state.settings.locale);

    const getAdvantages = useCallback(() => advantages.map(advantage => (
        <ViewportBlock
            key={advantage.id}
            title={locale === LOCALE.ru ? advantage.title : advantage.localizations[0].title}
            description={locale === LOCALE.ru ? advantage.description : advantage.localizations[0].description}
        />
    // eslint-disable-next-line react-hooks/exhaustive-deps
    )), [locale]);

    return <Intro
        locale={locale}
        getAdvantages={getAdvantages}
    />;
};

export default IntroContainer;