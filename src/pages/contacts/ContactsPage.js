import React, { useEffect } from 'react';
import styles from './ContactsPage.module.css';
import cx from 'classnames';
import ContactsList from '../../components/Contacts/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../store/redux/contacts';
export default function ContactsPage() {
  const [contacts, created] = useSelector(({ contacts }) => [contacts.items, contacts.created]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Contact page';
    dispatch(fetchContacts());
  }, [dispatch, created]);

  return (
    <div className={styles.container}>
      <div className={cx(styles.heading, 'title')}>Contacts</div>
      <div className={styles.divider}></div>
      <ContactsList items={contacts} />
    </div>
  );
}
