import { useSelector } from 'react-redux';

import SocialMedia from '../components/SocialMedia/SocialMedia';

const SocialMediaContainer = () => {
    const locale = useSelector(state => state.settings.locale);

    return <SocialMedia
        locale={locale}
    />;
};

export default SocialMediaContainer;