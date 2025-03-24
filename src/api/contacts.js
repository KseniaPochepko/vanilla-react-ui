export default class ContactsApi {
  #client = null;

  constructor(client) {
    this.#client = client;
  }

  list(params) {
    return this.#client.get('/contacts', { params });
  }
  get(id) {
    return this.#client.get(`/contacts/${id}`);
  }
  create(data) {
    return this.#client.post('/contacts', { data });
  }
  update(id, data) {
    return this.#client.patch(`/contacts/${id}`, { data });
  }
  delete(id) {
    return this.#client.delete(`/contacts/${id}`);
  }
}
