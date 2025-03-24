export default class AuthApi {
  #client = null;

  constructor(client) {
    this.#client = client;
  }

  login(credentials) {
    return this.#client.post('/auth/login', credentials, { useAuth: false });
  }

  me() {
    return this.#client.get('/auth/me');
  }

  register(credentials) {
    return this.#client.post('/auth/register', credentials);
  }
}
