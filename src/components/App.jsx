import { GlobalStyle } from "./GlobalStyle";
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'phonebook-storage';

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const getInitialContacts = ()=>{
    const storageContacts = localStorage.getItem(STORAGE_KEY);  

    if (storageContacts !== null) {
      return JSON.parse(storageContacts);
    }
    return initialContacts;
  }

export const App = ()=>{
    const [contacts, setContacts] = useState(getInitialContacts);
    const [filter, setFilter] = useState('');

    useEffect(()=>{         
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));  
     },[contacts]);

    const addContacts = newContact => {    
    const checkContact = contacts.find(contact => contact.name === newContact.name);          
      
        if (checkContact) {    
          return alert(`${newContact.name} is already in contacts.`);;
        }             
          setContacts(prevState => [...prevState, newContact]);
        };

    const contactFilter = searchContact => {
            setFilter(searchContact)          
        };

    const onDelete = (ContactId) => {
        setContacts(prevState => {
          return  prevState.filter(contact => contact.id !== ContactId)
        })        
    };   
    
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={addContacts} />
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={contactFilter}/>       
          <ContactList contacts={visibleContacts} onDelete={onDelete}/>
          <GlobalStyle/>
        </div>
        )
}