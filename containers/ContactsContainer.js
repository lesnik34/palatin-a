import { useSelector } from 'react-redux';

import Contacts from '../components/Contacts/Contacts';

const ContactsContainer = () => {
    const { global } = useSelector(state => state.content);

    return <Contacts
        email={global.email}
        phones={global.phoneNumbers && global.phoneNumbers.html}
    />;
};

export default ContactsContainer;