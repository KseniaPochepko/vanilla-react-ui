import React from 'react';

import styles from './SidebarItem.module.css';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

export function SidebarItem({ item }) {
  return (
    <NavLink to={item.path} className={({ isActive }) => cx(styles.link, { [styles.active]: isActive })}>
      <span className={cx('ellipsis', 'text')}>{item.title}</span>
    </NavLink>
  );
}

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
};

SidebarItem.defaultProps = {};
