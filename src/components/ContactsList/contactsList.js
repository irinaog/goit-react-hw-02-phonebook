import { ContactsListItem } from "components/ContactsListItem/contactsListItem"
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ name, number, id }) => (
                <ContactsListItem key={id} name={name} number={number} id={id} deleteContact={onDeleteContact} />
            ))}
            
        </ul>
    )
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact:PropTypes.func.isRequired,
}


// export const ContactsList = ({contacts, onDeleteContact}) => {
//     return (
//         <ul>
//             {contacts.map(({ name, number, id }) => (
//                 <ContactsListItem key={shortid.generate()} name={name} number={number} onDeleteContact={onDeleteContact(id)} />
//             ))}
            
//         </ul>
//     )
// }