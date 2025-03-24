import styles from './ActivationPage.module.css';
import cx from 'classnames';
import React from 'react';
import ActivationImage from '../../static/images/activation.png';
import { Link } from 'react-router-dom';

export function ActivationPage() {
  return (
    <div className={styles.container}>
      <div className={cx('title', 'text-lg', styles.greeting)}>Welcome to</div>
      <div className={cx('title', 'text-lg', styles.greeting)}>the community!</div>
      <div className={cx('text', 'text-sm', styles.greeting)}>You have been successfully singed up. Login to start</div>
      <div className={styles.login_image}>
        <img className={styles.activation_image} src={ActivationImage} alt="activation" />
      </div>
      <Link to={'/login'} className={styles.link}>
        <button className={cx('button', 'success', styles.login_button)}>Sign In</button>
      </Link>
    </div>
  );
}
