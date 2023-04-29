import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../operations/operations';
import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useEffect } from 'react';

export function ContactList() {
  let contacts = useSelector(state => state.contacts.values);
  let isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const setDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();

  let contactFilter =
    contacts.length > 0 &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  return (
    <List>
      {isLoading ? 'Loading ...' : <br />}

      {contactFilter.length > 0 &&
        contactFilter.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={setDeleteContact}
          />
        ))}
    </List>
  );
}
