import { contacts } from '../../api';
import { takeLatest, put } from 'redux-saga/effects';
import { fetchContacts, fetchContactsSuccess } from '../redux/contacts';

export default function* contactsSaga() {
  yield takeLatest(fetchContacts.type, fetchSaga);
}

function* fetchSaga(action) {
  try {
    const { items } = yield contacts.list(action.payload);
    yield put(fetchContactsSuccess(items));
  } catch {}
}
