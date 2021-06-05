import { useSelector } from 'react-redux';

import Footer from '../components/Footer/Footer';

const FooterContainer = (props) => {
    const { inViewport, forwardedRef} = props;
    const { global } = useSelector(state => state.content);

    return <Footer
        location={global.location ? global.location.html : ''}
        email={global.email}
        copyright={global.copyright}
        phones={global.phoneNumbers ? global.phoneNumbers.html : ''}
        inViewport={inViewport}
        forwardedRef={forwardedRef}
    />;
};

export default FooterContainer;