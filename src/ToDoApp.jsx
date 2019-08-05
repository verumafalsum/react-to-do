import React, { Component } from "react";
import _ from "lodash";
import "./ToDoApp.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Loader from "./components/Loader";

//TODO: https://jsonplaceholder.typicode.com/
class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    
    this.fetchToDo();
  }

  sleep = (time) => {
      return new Promise(resolve => setTimeout(resolve, time));
  }

  fetchToDo = async () => {
    await this.sleep(2000);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error! Something went wrong");
        }
      })
      .then(data => this.setState({ todos: data, isLoading: false }))
      .catch(error => console.log(error));
  };

  addToDo = value => {
    const todo = {
      userId: 1,
      id: _.uniqueId(),
      title: value,
      completed: false
    };
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos });
  };

  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  };

  render() {
    const isLoading = this.state.isLoading;

    return (
      <div className="ToDoApp">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <ToDoForm addToDo={this.addToDo} />
            <ToDoList
              className="main"
              todos={this.state.todos}
              deleteToDo={this.deleteToDo}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ToDoApp;
