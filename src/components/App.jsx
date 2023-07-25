import { nanoid } from 'nanoid'
import { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'


export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (<div>
      <h1>Phonebook</h1>
      <ContactForm/>
    
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>)
  }
}