import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
  created: null,
};

const {
  actions: {
    fetchTodo,
    fetchTodoSuccess,
    createTodo,
    createTodoSuccess,
    createTodoFailure,
    updateTodo,
    updateTodoSuccess,
    updateTodoFailure,
    deleteTodo,
    deleteTodoSuccess,
    deleteTodoFailure,
    deleteAllTodos,
    deleteAllTodosSuccess,
    deleteAllTodosFailure,
  },
  reducer,
} = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodo: (state) => ({ ...state }),
    fetchTodoSuccess: (state, action) => ({ ...state, items: action.payload }),

    createTodo: (state) => ({ ...state, error: null }),
    createTodoSuccess: (state, action) => ({ ...state, created: action.payload.id }),
    createTodoFailure: (state, action) => ({ ...state, error: action.payload }),

    updateTodo: (state) => ({ ...state, error: null }),
    updateTodoSuccess: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index === -1) return;
      state.items[index] = action.payload;
      return state;
    },
    updateTodoFailure: (state, action) => ({ ...state, error: action.payload }),

    deleteTodo: (state) => ({ ...state }),
    deleteTodoSuccess: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      return state;
    },
    deleteTodoFailure: (state, action) => ({ ...state, error: action.payload }),

    deleteAllTodos: (state) => state,
    deleteAllTodosSuccess: (state) => ({ ...state, items: [] }),
    deleteAllTodosFailure: (state, action) => ({ ...state, error: action.payload }),
  },
});

export {
  fetchTodo,
  fetchTodoSuccess,
  createTodo,
  createTodoSuccess,
  createTodoFailure,
  updateTodo,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
  deleteAllTodos,
  deleteAllTodosSuccess,
  deleteAllTodosFailure,
};
export default reducer;

/** Reducers are functions that take the current state and an action as arguments,
 * and return a new state result. In other words, (state, action) => newState.
 * */
