import "./App.css";
import { Component } from 'react'
import ContactForm from "./components/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactLIst";
import Filter from "./components/Filter";

class App extends Component {
 
 state = {
   contacts: [],
   filter: '',
 }
  
  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert( name + 'is already in contacts' )
      return;
    }
    this.setState(({ contacts }) => {
    return {
      contacts: [
        {
        name,
        number,
        id: nanoid()
      },
      ...contacts]
      }
    })
    
  };

  changeFilter = (filteredValue) => {
    this.setState({ filter: filteredValue })
  }

  getFilteredContactList = () => {
    const {contacts , filter} = this.state
        return contacts.filter(
      contact => contact.name.toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    )
  }

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      
        contacts: contacts.filter(contact => contact.id !== id)
      
    }))

  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    this.setState({contacts: parsedContacts})
  }

  componentDidUpdate(prevProps,prevState ) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const filteredContactList = this.getFilteredContactList()
    return (
      <div className='container'>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter onChange={ this.changeFilter}/>
        <ContactList contacts={filteredContactList} deleteContact={this.deleteContact}/>
      </div>
    ) 
  };
}

export default App;


