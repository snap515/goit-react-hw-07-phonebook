import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { addContact } from '../../redux/contacts/contactsReducer';

import css from './ContactForm.module.css'


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);

  const nameRef = useRef(null);
  const numberRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const name = nameRef.current.value;
    const number = numberRef.current.value;

    const alreadyInContacts = contacts.some(contact => contact.name.toLowerCase() === name.trim().toLowerCase())
    if (alreadyInContacts) {
      alert(`Contact ${name} is already in List.`)
      return;
    }

    const newContact = { id: nanoid(), name, number }
    dispatch(addContact(newContact))

    e.currentTarget.reset();
  }

  return (
    <form className={css.form } onSubmit={onSubmit}>
      <label className={css.label } htmlFor="nameInput">Name</label>
      <input className={css.input } ref={nameRef} type="text" id="nameInput" name="name" required placeholder="John"/>               

      <label className={css.label }htmlFor="telInput">Number</label>
      <input className={css.input } ref={numberRef} type="tel" id="telInput" name="number" required placeholder="123-45-67"/>

      <button className={css.submitBtn }type="submit">Add Contact</button>
    </form>
  )
}