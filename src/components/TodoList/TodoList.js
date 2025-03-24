import styles from './TodoList.module.css';
import cx from 'classnames';
import { TodoItem } from './TodoItem';
export function TodoList({ items, onDelete, onDoneSwitch, onEdit }) {
  return (
    <>
      <div className={styles.task_list}>
        <div className={cx('title', styles.heading)}>Your Todo List</div>
        <ol>
          {items.map((item) => (
            <TodoItem item={item} key={item.id} onDelete={onDelete} onDoneSwitch={onDoneSwitch} onEdit={onEdit} />
          ))}
        </ol>
      </div>
    </>
  );
}
