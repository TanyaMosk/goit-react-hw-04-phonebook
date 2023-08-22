import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";

const STORAGE_KEY = 'phonebook-storage';

export class App extends Component{
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',    
  }

  componentDidMount() {    

    const storage = localStorage.getItem(STORAGE_KEY)
    const storageContacts = JSON.parse(storage);

    if (storageContacts !== null) {
      this.setState({ contacts: storageContacts });
    }
  };
  
  componentDidUpdate(prevProps, prevState) {   
    
    if(this.state.contacts !== prevState.contacts)   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));    
  };
   
  addContacts = newContact => {
    
  const checkContact = this.state.contacts.find(contact => contact.name === newContact.name);

  if (checkContact) {    
    return alert(`${newContact.name} is already in contacts.`);;
  }

    this.setState(prevState => {    
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  
  contactFilter = searchContact => {
  this.setState({
    filter: searchContact,
  });
  };
  
  onDelete = (ContactId) => {
    console.log(ContactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== ContactId)
      }
    })
  };

  render() {    

    const { filter, contacts } = this.state;     
    
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={this.contactFilter}/>       
      <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
      <GlobalStyle/>
    </div>
    )
  }
}
