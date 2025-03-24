import axios from 'axios';
import config from '../config';
import { persistToken, retrieveToken, processToken } from '../utils/auth';
import AuthApi from './auth';
import TodoApi from './todo';
import ContactsApi from './contacts';

const tokens = {};

const client = axios.create({
  baseURL: config.apiBase,
  useAuth: true,
});

function init() {
  tokens.access = retrieveToken();
}

/**
 * This function sets or deletes access token.
 * @param {string | null} accessToken - access token parameter will be
 * processed and persisted or deleted if null passed
 */
function setToken(accessToken) {
  tokens.access = processToken(accessToken);
  persistToken(accessToken);
}

function checkToken() {
  return tokens.access && !tokens.access.isExpired;
}

client.interceptors.request.use(async (axiosConfig) => {
  console.info(`${axiosConfig.baseURL}${axiosConfig.url}`, axiosConfig);
  if (axiosConfig.useAuth && tokens.access) {
    axiosConfig.headers.Authorization = `Bearer ${tokens.access.token}`;
  }
  return axiosConfig;
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response, request } = error;
    const message = response?.data?.message || response?.statusText;
    const path = response?.data?.path;
    console.warn(`${request.responseURL}: [${response?.status}] ${message}`);
    const err = new Error(message);
    err.path = path;
    return Promise.reject(err);
  }
);

const auth = new AuthApi(client);
const todo = new TodoApi(client);

const contacts = new ContactsApi(client);

export { init, checkToken, setToken, auth, todo, contacts };
