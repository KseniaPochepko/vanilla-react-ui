import { combineReducers } from 'redux';
import auth from './auth';
import todo from './todo';
import contacts from './contacts';

const reducer = combineReducers({ auth, todo, contacts });

export default reducer;
