import { useDispatch, useSelector } from 'react-redux'
import { apiDeleteContact, apiGetContacts } from '../../redux/contacts/contactsSlice';
import css from './ContactList.module.css' 
import { useEffect } from 'react';
// import { STATUSES } from 'utils/constants';

export const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter.filter)
  // const status = useSelector(state => state.contacts.status)
  // const error = useSelector(state => state.contacts.error)
  
  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])

  const filteredContacts = contacts?.filter(contactEl => contactEl.name.toLowerCase().includes(filter.trim().toLowerCase()))

  const onDeleteContact = id => {
    const isConfirmed = window.confirm('Are you sure want to delete this contact?');
    if (isConfirmed) {
      dispatch(apiDeleteContact(id));
    }
  }

  return (
      <ul className={css.contactList}>
      {filteredContacts?.map(contact => {
        return (
            <li key={contact.id} className={css.contactItem} >
              <p className={css.contactText}>{contact?.name}: {contact?.phone}</p>
              <button className={css.deleteBtn} onClick={() => onDeleteContact(contact?.id)}>Delete</button>
            </li>)
      })}
      </ul>   
  )
}

            /* {status === STATUSES.pending && <div>Loading...</div>}
            {status === STATUSES.error && <div>{error}</div>} */