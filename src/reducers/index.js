import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    todos: todosReducer,
    user: userReducer
})
