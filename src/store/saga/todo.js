import { takeLatest, put } from 'redux-saga/effects';
import { todo } from '../../api';
import {
  fetchTodo,
  fetchTodoSuccess,
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  updateTodo,
  updateTodoFailure,
  updateTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
  deleteAllTodosFailure,
  deleteAllTodosSuccess,
  deleteAllTodos,
} from '../redux/todo';

export default function* todoSaga() {
  yield takeLatest(fetchTodo.type, fetchSaga);
  yield takeLatest(createTodo.type, createSaga);
  yield takeLatest(updateTodo.type, updateSaga);
  yield takeLatest(deleteTodo.type, deleteSaga);
  yield takeLatest(deleteAllTodos.type, deleteAllSaga);
}
//fetch = list all todos
function* fetchSaga(action) {
  try {
    const { items } = yield todo.list(action.payload);
    yield put(fetchTodoSuccess(items));
  } catch {}
}
function* createSaga(action) {
  try {
    const item = yield todo.create(action.payload);
    yield put(createTodoSuccess(item));
  } catch (err) {
    yield put(createTodoFailure(err.message));
  }
}
function* updateSaga(action) {
  try {
    const item = yield todo.update(action.payload.id, action.payload.data);
    yield put(updateTodoSuccess(item));
  } catch (err) {
    yield put(updateTodoFailure(err.message));
  }
}
function* deleteSaga(action) {
  try {
    yield todo.delete(action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (err) {
    yield put(deleteTodoFailure(err.message));
  }
}

function* deleteAllSaga() {
  try {
    yield todo.deleteMany();
    yield put(deleteAllTodosSuccess());
  } catch (err) {
    yield put(deleteAllTodosFailure(err.message));
  }
}
