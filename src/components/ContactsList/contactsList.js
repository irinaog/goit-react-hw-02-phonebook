import { ContactsListItem } from "components/ContactsListItem/contactsListItem"
import shortid from "shortid";

export const ContactsList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({ name, number }) => (
                <ContactsListItem key={shortid.generate()} name={name} number={number} />
            ))}
            
        </ul>
    )
}