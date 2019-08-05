export function addTodo(todo) {
  return {
    type: "ADD_TODO",
    payload: todo
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id
  };
}

export function fetchTodo(link) {
  return {
    type: "FETCH_TODO",
    payload: link
  };
}
