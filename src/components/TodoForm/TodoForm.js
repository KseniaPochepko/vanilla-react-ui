import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './TodoForm.module.css';
import cx from 'classnames';

export function TodoForm({ item, onSubmit, onDeleteAll, onReset }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    setTask(item ? item.text : ''); // item?.text ?? ''
  }, [item]);

  const handleSubmit = useCallback(() => {
    // пропсом передается функция handleAddNewTask и вызывается для введенного в input task
    onSubmit(task);
    setTask('');
  }, [task, onSubmit]);

  const handleKeyPressed = useCallback(
    (e) => {
      if (e.key !== 'Enter') return;
      handleSubmit();
    },
    [handleSubmit]
  );

  const handleChangeTask = useCallback((e) => {
    setTask(e.target.value);
  }, []);

  const title = useMemo(() => {
    return item ? 'Edit Todo Item' : 'Create your own Todo List';
  }, [item]);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.form}>
          <label>
            <div className={cx('title', styles.heading)}>{title}</div>
            <div className={styles.inputRoot}>
              <input
                type="text"
                placeholder="Enter your next task"
                className={styles.input}
                value={task}
                onChange={handleChangeTask}
                onKeyUp={handleKeyPressed}
              />
            </div>
          </label>
        </div>
        <div className={styles.form_button_row}>
          <button className={cx('button', 'success')} onClick={handleSubmit}>
            {item ? 'Save' : 'Add+'}
          </button>
          {item ? (
            <button className={cx('button', 'error')} onClick={onReset}>
              Cancel
            </button>
          ) : (
            <button className={cx('button', 'error')} onClick={() => onDeleteAll()}>
              Delete all
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/** Вопрос: состояния должны быть в основном компоненте и передаваться дочерним через пропсы;
 // надо ли состояния отсюда перенести?
 // Ответ: Состояние должно быть там где его можно раздать всем компонентам, которым оно надо
 */

/** className={styles.form} - styles нужно для подключения к csv, без него не работает
 * А в импорте стилей вверху файла с компонентом, нужно указать:
 * import styles from './TodoForm.module.css’, где в названии обязательно слово module
 * */

/** xук useCallback(fn, dependencies) дает возможность сохранить функциюб которая меняется, только
 * если меняется значение одного из deps(зависимостей). Если я пропущу какой-то депс, то его подсветит
 * eslint. Такой вариант определения функций лучше
 * */

/** onЧто-тоТам - всегда пропсы. Они описываются в родительском компоненте и передаются дочерним,
 * с помощью указания их в его return
 * например, у нас это в App.js
 * return (
 *     <div className="App">
 *       <TodoForm onSubmit={handleAddNewTask} onDeleteAll={handleDeleteAll} />
 *       <TodoList items={tasks} />
 *     </div>
 *   );
 *   items - тут тоже пропс */

/** условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно,
 * сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно
 * например:
 * useEffect(() => {
 *     setTask(item ? item.text : ''); // item?.text ?? ''
 *   }, [item]);
 * */

/** useMemo Hook returns a memoized value.
 Think of memoization as caching a value so that it does not need to be recalculated.
 The useMemo Hook only runs when one of its dependencies update.
 const title = useMemo(() => {
    return item ? 'Edit Todo Item' : 'Create your own Todo List';
  }, [item]);
 * */

/** разница onChange, onKeyUp, onClick */
