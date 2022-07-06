import React, { Component } from "react";
// import shortid from 'shortid';

export class FormAddContacts extends Component{
    state = {
    name: ' ',
    number: ' ',
    }

    hendleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({
      [name]: value
    })
    };

    hendleSubmit = e => {
    e.preventDefault();
    // this.state.contacts.push({ name: this.state.name, number:this.state.number, id: shortid.generate() });

        console.log(this.state)
        this.props.onSubmit(this.state)
    this.reset();
    };
    
     reset = () => {
    this.setState({ name: ' ', number: ' ' })
    };
    
    render() {
        return (
            <>
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
        </form></>
        )
    }
}