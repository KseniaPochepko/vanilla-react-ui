import React, { useCallback, useEffect, useState } from 'react';
import styles from './RegustrationPage.module.css';
import cx from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/redux/auth';
import RegisterImage from '../../static/images/register.png';

const defaultForm = { firstName: '', lastName: '', email: '', password: '', passwordConfirm: '' };

export function RegistrationPage() {
  const [registered] = useSelector(({ auth }) => [auth.created]);
  // const user = useSelector(({ auth }) => auth.user ?? {});
  const error = useSelector(({ auth }) => auth.error ?? {});
  const [form, setForm] = useState(defaultForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(error);

  useEffect(() => {
    if (registered) navigate('/activation');
    if (registered) setForm({ ...defaultForm });
  }, [navigate, registered]);

  const handleInputChanged = useCallback((key, e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }, []);

  const handleRegister = useCallback(() => {
    const { password, passwordConfirm } = form;
    if (passwordConfirm !== password) return;
    dispatch(register(form));
  }, [dispatch, form]);

  return (
    <div className={styles.container}>
      <div className={cx('title', 'text-lg', styles.greeting)}>Sign up to start</div>
      <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.general}</div>
      <div className={styles.registration_image}>
        <img className={styles.register_image} src={RegisterImage} alt="registration" />
      </div>
      <div className={styles.inputRoot}>
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleInputChanged.bind(null, 'firstName')}
          className={styles.input}
        />
      </div>
      <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.firstName}</div>
      <div className={styles.inputRoot}>
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleInputChanged.bind(null, 'lastName')}
          className={styles.input}
        />
      </div>
      <div className={styles.inputRoot}>
        <input
          type="text"
          placeholder="Email address"
          value={form.email}
          onChange={handleInputChanged.bind(null, 'email')}
          className={styles.input}
        />
      </div>
      <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.email}</div>
      <div className={styles.inputRoot}>
        <input
          type="password"
          placeholder="Your password"
          value={form.password}
          onChange={handleInputChanged.bind(null, 'password')}
          className={styles.input}
        />
      </div>
      <div className={cx(styles.helperText, 'text', 'text-sm', 'error')}>{error.password}</div>
      <div className={styles.inputRoot}>
        <input
          type="password"
          placeholder="Confirm your password"
          value={form.passwordConfirm}
          onChange={handleInputChanged.bind(null, 'passwordConfirm')}
          className={styles.input}
        />
      </div>
      <button className={cx('button', 'success', styles.create_button)} onClick={handleRegister}>
        Create an account
      </button>
      <div className={styles.sign_in_container}>
        <div className={cx('text', 'text-sm', styles.sign_in_question)}>Already have an account?</div>
        <Link to={'/login'} className={cx('text', 'text-sm', styles.sign_in_button)}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
