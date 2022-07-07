import React, { Component } from "react";
import shortid from 'shortid';

import { FormAddContacts } from './FormAddContacts/formAddContscts';
import { ContactsList } from "./ContactsList/contactsList";
import { FilterContacts } from "./FilterContacts/filterContacts";

export class App extends Component {
  contactsId = shortid.generate();
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: ' ',
    // number: ' ',
    filter: ' ',
  };


  // hendleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   console.log(e.currentTarget.value);
  //   this.setState({
  //     [name]: value
  //   })
    
  // };

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

  // hendleSubmit = e => {
  //   e.preventDefault();
  //   this.state.contacts.push({ name: this.state.name, number:this.state.number, id: shortid.generate() });

  //   console.log(this.state.contacts)
  //   this.reset();
  // };


  formSubmitHandler = data => {
    console.log(data);
    this.state.contacts.map(contact =>( 
      contact.name !== data.name ? this.state.contacts.push({ name: data.name, number: data.number, id: shortid.generate() }) :
        alert(data.name + 'is already in contacts')
    ))
    // this.state.contacts.push({ name: data.name, number: data.number, id: shortid.generate() })
      //   if (data.name === contact.name){}
      //   // data.name === contact.name ? alert('is already in contact')
      //   // :this.state.contacts.push({ name: data.name, number: data.number, id: shortid.generate() })
      // ))})); 
      // contacts: prevState.contacts.map(contact => {
      //   if (data.name !== contact.name) {
      //     return this.state.contacts.push({ name: data.name, number: data.number, id: shortid.generate() })
      //   }
      //    alert('is already in contacts')
      // })
    
  }

  // reset = () => {
  //   this.setState({ name: ' ', number: ' ' })
  // };


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

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id!==contactId)
    }))
  }
  
  render() {
    // const visibleContact = this.getContact();
    return (
      <>
         <h1 className="headlineApp">Phonebook</h1>
        <FormAddContacts onSubmit={this.formSubmitHandler} />
        {/* <form onSubmit={this.hendleSubmit}> 
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
        </form>  */}
        <FilterContacts
          contact={this.state.filter}
          filter={this.changeFilter}
        />
        {/* <h2>Contacts</h2>
        <label> Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.changeFilter}  
          ></input>
        </label> */}
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList
          contacts={this.getContact()}
          onDeleteContact = {this.deleteContact}
        />
        {/* <ul> */}
          {/* {visibleContact.map(({ name, number }) => (
            <li key={shortid.generate()}>{name} {number }</li>
  ))} */}
        {/* </ul> */}
      </>
    );
  };
};
