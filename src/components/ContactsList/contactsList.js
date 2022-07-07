import { ContactsListItem } from "components/ContactsListItem/contactsListItem"
import css from './ContactsList.module.css';

export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ name, number,  id}) => (
                <ContactsListItem key={id} name={name} number={number} id={id} deleteContact={ onDeleteContact} />
            ))}
            
        </ul>
    )
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