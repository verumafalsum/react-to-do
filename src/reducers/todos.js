import * as types from "../types/todos/types";

const initialState = {
  list: [],
  isLoading: false
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case types.DELETE_TODO:
      return {
        ...state,
        list: [...state.list.filter(todo => todo.id !== action.payload)]
      };
    // case "FETCH_TODO":
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error("Error! Something went wrong");
    //       }
    //     })
    //     .then(data => this.setState({ todos: data, isLoading: false }))
    //     .catch(error => console.log(error));
    default:
      return state;
  }
}
