import { Outlet, useNavigate } from 'react-router-dom';
import styles from './authLayout.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../components/common';

export function AuthLayout() {
  const [user, initialized] = useSelector(({ auth }) => [auth.user, auth.initialized]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/todo');
    }
  }, [user, navigate]);

  return (
    <div className={styles.root}>
      {initialized ? (
        <div className={styles.content}>
          <Outlet />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
