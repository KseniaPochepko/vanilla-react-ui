export default class TodoApi {
  #client = null;

  constructor(client) {
    this.#client = client;
  }

  list(params) {
    return this.#client.get('/todo', { params });
  }

  create(data) {
    return this.#client.post('/todo', data);
  }

  update(id, data) {
    return this.#client.patch(`/todo/${id}`, data);
  }

  delete(id) {
    return this.#client.delete(`/todo/${id}`);
  }

  deleteMany() {
    return this.#client.delete('/todo');
  }
}
