import { all } from 'redux-saga/effects';
import authSaga from './auth';
import todoSaga from './todo';
import contactsSaga from './contacts';

export default function* saga() {
  yield all([authSaga(), todoSaga(), contactsSaga()]);
}
