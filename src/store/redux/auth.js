import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../api';

const initialState = {
  error: null,
  user: null,
  initialized: false,
  created: null,
};

const {
  actions: {
    initAuth,
    initAuthSuccess,
    login,
    loginSuccess,
    loginFailure,
    logout,
    register,
    registerSuccess,
    registerFailure,
  },
  reducer,
} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initAuth: (state) => state,
    initAuthSuccess: (state, action) => ({
      ...state,
      initialized: true,
      user: action.payload,
    }),

    login: (state) => ({
      ...state,
      error: null,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    loginFailure: (state, action) => ({
      ...state,
      error: action.payload,
    }),

    logout: (state) => {
      setToken(null);
      return {
        ...state,
        error: null,
        user: null,
      };
    },

    register: (state) => ({ ...state, error: null, created: null }),
    registerSuccess: (state, action) => ({ ...state, created: action.payload.id }),
    registerFailure: (state, action) => ({ ...state, error: action.payload }),
  },
});

export {
  initAuth,
  initAuthSuccess,
  login,
  loginSuccess,
  loginFailure,
  logout,
  register,
  registerSuccess,
  registerFailure,
};

export default reducer;
