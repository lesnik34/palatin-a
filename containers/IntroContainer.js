import { useSelector } from 'react-redux';
import handleViewport from 'react-in-viewport';

import Intro from '../components/Intro/Intro';
import AdvantageItem from '../components/AdvantageItem';

const IntroContainer = () => {
    const ViewportBlock = handleViewport(AdvantageItem, { rootMargin: '-100px' });
    const { advantages } = useSelector(state => state.content);

    const getAdvantages = () => advantages.map(advantage => (
        <ViewportBlock key={advantage.id} title={advantage.title} description={advantage.description} />
    ));

    return <Intro
        getAdvantages={getAdvantages}
    />;
};

export default IntroContainer;