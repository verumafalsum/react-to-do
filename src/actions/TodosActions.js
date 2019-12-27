import * as types from "../types/todos/types"

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo
})

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: id
})

export const fetchTodo = (link) => ({
  type: types.FETCH_TODO,
  payload: link
});

export const switchTodoCompleted = (id, completed) => ({
  type: types.SWITCH_TODO_COMPLETED,
  payload: { id, completed }
});
