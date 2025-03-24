import styles from './Sidebar.module.css';
import { SidebarItem } from './SidebarItem';
import cx from 'classnames';
import { routes } from '../../routes';
export function Sidebar({ open, onToggle }) {
  return (
    <>
      <div className={cx(styles.overlay, open ? styles.open : '')} onClick={onToggle} />
      <div className={cx(styles.sidebar_container, open ? styles.open : '')}>
        <div className={styles.menu_button_container}>
          <button className={styles.menu_button} onClick={onToggle}>
            <span className={'material-icons'}>{open ? 'close' : 'menu'}</span>
          </button>
        </div>
        {!open && <p className={cx('title', 'ellipsis', styles.sidebar_title)}>Sidebar</p>}
        <div className={cx(styles.sidebarItem_wrap, open ? styles.open : '')}>
          {routes.map((route) => (
            <SidebarItem key={route.path} item={route} />
          ))}
        </div>
      </div>
    </>
  );
}
