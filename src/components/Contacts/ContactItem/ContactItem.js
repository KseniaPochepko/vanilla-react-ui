import React from 'react';
import styles from './ContactItem.module.css';
import AvatarImage from '../../../static/images/avatar.jpg';
import cx from 'classnames';
export default function ContactItem({ item }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.avatar}>
            <img className={styles.avatar_icon} src={AvatarImage} alt="avatar" />
          </div>
          <div className={styles.name}>
            <div className={cx(styles.first_name, 'text', 'text-md')}>{item.firstName}</div>
            <div className={cx(styles.last_name, 'text', 'text-md', 'ellipsis')}>{item.lastName}</div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={cx(styles.phone, 'text', 'text-md')}>
            <span className="material-icons">phone</span>
            &nbsp;{item.phoneNumber}
          </div>
          <div className={cx(styles.email, 'text', 'text-md')}>
            <span className="material-icons">alternate_email</span>
            &nbsp;{item.email}
          </div>
          <div className={cx(styles.dob, 'text', 'text-md')}>
            <span className="material-icons">today</span>
            &nbsp;{item.dateOfBirth}
          </div>
        </div>
        <div className={styles.button_row}>
          <button className={cx(styles.edit_button, 'button', 'success')}>Edit Contact</button>
          <button className={cx('button', 'error')}>Delete</button>
        </div>
      </div>
    </div>
  );
}
