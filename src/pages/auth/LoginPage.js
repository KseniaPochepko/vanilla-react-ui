import React, { useCallback, useState } from 'react';
import styles from './LoginPage.module.css';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import RocketImage from '../../static/images/rocket.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/redux/auth';

export function LoginPage() {
  const error = useSelector(({ auth }) => auth.error ?? {});

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChanged = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChanged = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    dispatch(login({ email, password }));
  }, [email, password, dispatch]);

  return (
    <div className={styles.container}>
      <div className={cx('title', 'text-lg', styles.greeting)}>Hey there!</div>
      <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.general}</div>
      <div className={styles.login_image}>
        <img className={styles.rocket_image} src={RocketImage} alt="rocket" />
      </div>
      <div className={styles.formControl}>
        <div className={styles.inputRoot}>
          <input
            value={email}
            onChange={handleEmailChanged}
            name="email"
            type="text"
            placeholder="Email address"
            className={styles.input}
          />
        </div>
        <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.email}</div>
      </div>

      <div className="form-control">
        <div className={styles.inputRoot}>
          <input
            value={password}
            onChange={handlePasswordChanged}
            name="password"
            type="password"
            placeholder="Your password"
            className={styles.input}
          />
        </div>
        <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.password}</div>
      </div>

      <Link to={'/forgot-password'} className={cx('text', 'text-sm', styles.forgot_password_button)}>
        forgot password?
      </Link>
      <button onClick={handleLogin} className={cx('button', 'success', styles.login_button)}>
        Sign In
      </button>
      <div className={styles.sign_up_container}>
        <div className={cx('text', 'text-sm', styles.sign_up_question)}>Don't have an account?</div>
        <Link to={'/registration'} className={cx('text', 'text-sm', styles.sign_up_button)}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
