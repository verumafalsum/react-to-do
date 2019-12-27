import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../actions/TodosActions";
import ItemContainer from "../ItemContainer/ItemContainer";

import "./ToDoListContainer.css";

const ToDoListContainer = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div className="ToDoList">
      {todos.list.map(todo => (
        <ItemContainer
          title={todo.title}
          id={todo.id}
          key={todo.id}
          completed={todo.completed}
          deleteTodo={() => dispatch(deleteTodo(todo.id))}
        />
      ))}
    </div>
  );
}

export default ToDoListContainer;
