const initialState = {
  list: []
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: [...state.list.filter(todo => todo.id !== action.payload)]
      };

    default:
      return state;
  }
}
