import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export default function ContactsList({ items }) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ContactItem item={item} key={item.id} />
      ))}
    </div>
  );
}
