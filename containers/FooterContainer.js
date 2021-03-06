import { useSelector, shallowEqual } from 'react-redux';

import { LOCALE } from '../variables/variables';
import Footer from '../components/Footer/Footer';

const FooterContainer = (props) => {
    const { inViewport, forwardedRef} = props;
    const { global } = useSelector(state => state.content, shallowEqual);
    const locale = useSelector(state => state.settings.locale);

    const formatPhone = (phone) => `+${phone[0]} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9)}`;

    const getPhones = () => (
        <ul>
            { global?.contactPhone?.map(el => (
                <li key={el}>
                    <a href={`tel:${el}`}>
                        {formatPhone(el)}
                    </a>
                </li>
            ))}
        </ul>
    );

    return <Footer
        location={LOCALE.ru === locale ? global.location?.html : global.localizations[0].location?.html}
        email={global.email}
        copyright={global.copyright}
        phones={getPhones()}
        inViewport={inViewport}
        forwardedRef={forwardedRef}
    />;
};

export default FooterContainer;