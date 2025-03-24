import React, { useCallback, useEffect, useState } from 'react';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';

import styles from './Todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteAllTodos, deleteTodo, fetchTodo, updateTodo } from '../../store/redux/todo';

export default function TodoPage() {
  // const [tasks, setTasks] = useState(getTasks());
  const [tasks, created] = useSelector(({ todo }) => [todo.items, todo.created]);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Todo List';
    dispatch(fetchTodo());
  }, [created, dispatch]);

  const handleSubmitTask = useCallback(
    (text) => {
      if (!text) {
        return;
      }
      //const nextTasks = [...tasks];
      if (!editItem) {
        // create task
        // const task = { id: Math.floor(Math.random() * 1e6), text, done: false };
        console.log('add new task', { text });
        dispatch(createTodo({ text }));
        // nextTasks.push(task);
      } else {
        // update task
        // find task
        // const itemToSave = tasks.find((item) => item.id === editItem.id);
        // itemToSave.text = text;
        // setEditItem(null);
        dispatch(updateTodo({ id: editItem.id, data: { text } }));
      }
      //setTasks(nextTasks);
    },
    [editItem, dispatch]
  );

  const handleDeleteAll = useCallback(() => {
    dispatch(deleteAllTodos());
    setEditItem(null);
  }, [dispatch]);

  const handleDeleteOne = useCallback(
    (id) => {
      //setTasks(tasks.filter((item) => item.id !== id));
      dispatch(deleteTodo(id));
      if (editItem?.id === id) {
        setEditItem(null);
      }
    },
    [dispatch, editItem]
  );

  const handleDoneSwitch = useCallback(
    (id) => {
      const { isDone } = tasks.find((item) => item.id === id);
      dispatch(updateTodo({ id, data: { isDone: !isDone } }));
    },
    [dispatch, tasks]
  );

  const handleEdit = useCallback(
    (id) => {
      const itemToEdit = tasks.find((item) => item.id === id);
      setEditItem(itemToEdit);
    },
    [tasks]
  );

  const handleEditCancel = useCallback(() => {
    setEditItem(null);
  }, []);

  return (
    <div className={styles.container}>
      <TodoForm item={editItem} onSubmit={handleSubmitTask} onDeleteAll={handleDeleteAll} onReset={handleEditCancel} />
      <TodoList items={tasks} onDelete={handleDeleteOne} onDoneSwitch={handleDoneSwitch} onEdit={handleEdit} />
    </div>
  );
}
