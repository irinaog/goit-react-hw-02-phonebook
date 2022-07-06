import React, { Component } from "react";
import shortid from 'shortid';

// import {FormAddContacts} from './FormAddContacts/formAddContscts'


export class App extends Component {
  contactsId = shortid.generate();
  state = {
    contacts: [{ name: 'Diana', number: '0254821', id: this.contactsId, },
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: ' ',
    number: ' ',
    filter: ' ',
  };


  hendleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget.value);
    this.setState({
      [name]: value
    })
    
  };

  // hendleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({
  //     name: event.currentTarget.value,
  //   })
  // };
  // hendleNumberChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({
  //     number: event.currentTarget.value,
  //   })
  // };

  hendleSubmit = e => {
    e.preventDefault();
    this.state.contacts.push({ name: this.state.name, number:this.state.number, id: shortid.generate() });

    console.log(this.state.contacts)
    this.reset();
  };

  // formSubmitHandler = data => {
  //   console.log(data)
  // }

  reset = () => {
    this.setState({ name: ' ', number: ' ' })
  };


  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }

  getContact = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter),
    );
  };
  
  render() {
    const visibleContact = this.getContact();
    return (
      <>
        {/* <FormAddContacts onSubmit={this.formSubmitHandler} /> */}
        <form onSubmit={this.hendleSubmit}> 
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              value={this.state.name}
              onChange={this.hendleChange}
                  />
          </label>
           <label>
            Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.hendleChange}
            />
          </label>
          
          <button type="submit">Add contact</button>
        </form> 

        <h2>Contacts</h2>
        <label> Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.changeFilter}  
          ></input>
        </label>
        <ul>
          {visibleContact.map(({ name, number }) => (
            <li key={shortid.generate()}>{name} {number }</li>
  ))}
        </ul>
      </>
    );
  };
};
