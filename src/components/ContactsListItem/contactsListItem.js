import shortid from "shortid";
import css from './ContactListItem.module.css'

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
    return (
    
        <li className={css.contactItem} key={shortid.generate()}>
            <p className={css.contactName}>{name} {number} </p>
            <button className={css.deleteBtn} onClick={()=>deleteContact(id)}>Delete</button>
        </li>
    )
};

// export const ContactsListItem = ({ name, number, onDeleteContact}) => {
//     return (
    
//         <li key={shortid.generate()}>
//             <p>{name} {number} </p>
//             <button onClick={()=>onDeleteContact()}>Delete</button>
//         </li>
//     )
// };