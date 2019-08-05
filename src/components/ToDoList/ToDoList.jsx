import React, { Component } from "react";
import "./ToDoList.css";
import Item from "../Item";

class ToDoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div className="ToDoList">
        {todos.map(todo => (
          <Item
            className="Item"
            title={todo.title}
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
