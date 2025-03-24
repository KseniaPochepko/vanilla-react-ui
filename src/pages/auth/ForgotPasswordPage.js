import React from 'react';
import styles from './ForgotPassword.module.css';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import EmailImage from '../../static/images/email_picture.png';
export function ForgotPasswordPage() {
  return (
    <div className={styles.container}>
      <div className={cx('title', 'text-lg', styles.greeting)}>Forgot your password?</div>
      <div className={cx('text', 'text-sm', styles.greeting)}>
        Enter your email address and we'll send you a link to reset your password
      </div>
      <div className={styles.email_image}>
        <img className={styles.forgot_pass_image} src={EmailImage} alt="email" />
      </div>
      <div className={styles.inputRoot}>
        <input type="text" placeholder="Email address" className={styles.input} />
      </div>
      <button className={cx('button', 'success', styles.submit_button)}>Submit</button>
      <div className={styles.return_to_login_container}>
        <div className={cx('text', 'text-sm', styles.return_to_login_question)}>Remember your password?</div>
        <Link to={'/login'} className={cx('text', 'text-sm', styles.return_to_login_button)}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
