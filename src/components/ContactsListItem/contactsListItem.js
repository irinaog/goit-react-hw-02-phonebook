import shortid from "shortid";

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
    return (
    
        <li key={shortid.generate()}>
            <p>{name} {number} </p>
            <button onClick={()=>deleteContact(id)}>Delete</button>
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