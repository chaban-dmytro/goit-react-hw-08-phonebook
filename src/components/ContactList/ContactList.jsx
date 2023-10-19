import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactsList } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.isLoading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getContactsList());
  }, [dispath]);

  function getFilterContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }

  function onDeleteContact(id) {
    dispath(deleteContact(id));
  }

  if (getFilterContacts().length === 0) {
    return;
  } else {
    if (isLoading === true) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className={css.items}>
          {getFilterContacts().map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <span>{contact.name}: </span>
                <span>{contact.phone}</span>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      );
    }
  }
};

export default ContactList;
