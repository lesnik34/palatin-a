import { useSelector } from 'react-redux';

import Contacts from '../components/Contacts/Contacts';

const ContactsContainer = () => {
    const { global } = useSelector(state => state.content);

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

    return <Contacts
        email={global.email}
        phones={getPhones()}
    />;
};

export default ContactsContainer;