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

      <form className={styles.formControl}>
        <div className={styles.inputRoot}>
          <label htmlFor="email" className={cx(styles.label, 'text', 'text-sm', 'label')}>
            Email address
          </label>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
            value={email}
            onChange={handleEmailChanged}
          />
        </div>

        <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.email}</div>

        <div className={styles.formControl}>
          <div className={styles.inputRoot}>
            <label htmlFor="email" className={cx(styles.label, 'text', 'text-sm', 'label')}>
              Password
            </label>
            <input
              value={password}
              onChange={handlePasswordChanged}
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
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
      </form>
    </div>
  );
}
