import styles from './layout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Loader } from '../../components/common';

export function Layout() {
  const [user, initialized] = useSelector(({ auth }) => [auth.user, auth.initialized]);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!user && initialized) {
      navigate('/login');
    }
  }, [navigate, user, initialized]);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <div className={styles.root}>
      {initialized ? (
        <>
          <div className={styles.sidebar} onToggle={toggleMenu}>
            <Sidebar open={menuOpen} onToggle={toggleMenu} />
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </>
      ) : (
        <Loader bgColor={'#1C322D'} />
      )}
    </div>
  );
}
