import { useDispatch, useSelector } from 'react-redux'
import { removeContact } from '../../redux/contacts/contactsReducer';
import css from './ContactList.module.css'

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts)
  const filter = useSelector(store => store.filter.filter)

  const filteredContacts = contacts.filter(contactEl => contactEl.name.toLowerCase().includes(filter.trim().toLowerCase()))

  const onDeleteContact = idToDelete => {
    const isConfirmed = window.confirm('Are you sure want to delete this contact?');
    if (isConfirmed) {
      dispatch(removeContact(idToDelete));
    }
  }

  return (
      <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <p className={css.contactText}>{contact.name}: {contact.number}</p>
            <button className={css.deleteBtn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        )
      })}
      </ul>   
  )
}