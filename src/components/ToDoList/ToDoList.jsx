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
            text={todo.text}
            id={todo.id}
            key={todo.id}
            deleteToDo={this.props.deleteToDo}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
