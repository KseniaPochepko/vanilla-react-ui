import { takeLatest, put } from 'redux-saga/effects';
import * as api from '../../api';
import {
  initAuth,
  initAuthSuccess,
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
} from '../redux/auth';
export default function* authSaga() {
  yield takeLatest(initAuth.type, initSaga);
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(register.type, registerSaga);
}

function* initSaga() {
  const tokenExists = api.checkToken();
  const { user } = tokenExists ? yield api.auth.me() : { user: null };
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(initAuthSuccess(user));
}

function* loginSaga(action) {
  const { email, password } = action.payload;
  try {
    const tokens = yield api.auth.login({ email, password });
    api.setToken(tokens.accessToken);
    const user = yield api.auth.me();
    yield put(loginSuccess(user));
  } catch (err) {
    const { path = 'general', message } = err;
    yield put(loginFailure({ [path]: message }));
  }
}

function* registerSaga(action) {
  try {
    const user = yield api.auth.register(action.payload);
    yield put(registerSuccess(user));
  } catch (err) {
    const { path = 'general', message } = err;
    yield put(registerFailure({ [path]: message }));
  }
}
