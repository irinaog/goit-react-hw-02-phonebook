export const FilterContacts = ({contact, filter}) => {
    return (<>
        
        <label> Find contacts by name
            <input
                type="text"
                name="filter"
                value={contact}
                onChange={filter}
            ></input>
        </label>
    </>
    )
};