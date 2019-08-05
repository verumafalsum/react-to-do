import React, { Component } from "react";
import "./ToDoList.css";
import Item from "../Item";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
            deleteToDo={this.props.deleteToDo}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
