import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
  created: null,
};

const {
  actions: { fetchContacts, fetchContactsSuccess },
  reducer,
} = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContacts: (state) => state,
    fetchContactsSuccess: (state, action) => ({ ...state, items: action.payload }),
  },
});

export { fetchContacts, fetchContactsSuccess };

export default reducer;
