import { nanoid } from 'nanoid';
import { Component } from 'react';
import style from './ContactForm.module.css'

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <form className={style.form}>
          <label className={style.formLabel}>Name<input
          className={style.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /></label>
          
          <label className={style.formLabel}>Number<input
          className={style.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /></label>
          
          <button className={style.formButton} type='submit'>Add contact</button>
        </form>

      </div>
    );
  }
}
