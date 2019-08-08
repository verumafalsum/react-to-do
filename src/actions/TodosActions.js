import * as types from "../types/todos/types"

export function addTodo(todo) {
  return {
    type: types.ADD_TODO,
    payload: todo
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    payload: id
  };
}

export function fetchTodo(link) {
  return {
    type: types.FETCH_TODO,
    payload: link
  };
}

export function switchTodoCompleted(id, completed) {
  return {
    type: types.SWITCH_TODO_COMPLETED,
    payload: { id, completed }
  }
}
