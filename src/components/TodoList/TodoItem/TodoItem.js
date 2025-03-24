import React from 'react';
import styles from './TodoItem.module.css';
import cx from 'classnames';
export function TodoItem({ item, onDelete, onDoneSwitch, onEdit }) {
  return (
    <li>
      <div className={cx(styles.item, { [styles.done]: item.isDone })}>
        <span className={cx('text', 'text-md', styles.item_text)}>{item.text}</span>
        <div className={styles.button_row}>
          <button className={cx('button', 'success')} onClick={() => onDoneSwitch(item.id)}>
            {item.isDone ? 'Undone' : 'Done'}
          </button>
          <button className={cx('button', 'success')} onClick={() => onEdit(item.id)}>
            Edit
          </button>
          <button className={cx('button', 'error')} onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
