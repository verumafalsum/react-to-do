import React, { Component } from "react";
import _ from "lodash";
import "./ToDoApp.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addToDo = (value) => {
    const todo = {text: value, id: _.uniqueId()};
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="ToDoApp">
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList className="main" todos={this.state.todos} />
      </div>
    );
  }
}

export default ToDoApp;
