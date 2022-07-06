import shortid from "shortid";

export const ContactsListItem = ({ name, number }) => {
    return (
    
        <li key={shortid.generate()}>{name} {number}</li>
    )
};