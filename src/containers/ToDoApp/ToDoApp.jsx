import React, { Component } from "react";
import ToDoListContainer from "../ToDoListContainer/ToDoListContainer";
import ToDoFormContainer from "../ToDoFormContainer/ToDoFormContainer";
import Loader from "../../components/Loader";

import "./ToDoApp.css";

//TODO: https://jsonplaceholder.typicode.com/
class ToDoApp extends Component {
  // componentDidMount() {
  //   // TODO: CREATE ACTION FOR LOADING
  //   this.setState({ isLoading: false });

  //   const { fetchTodoAction } = this.props;

  //   fetchTodoAction("https://jsonplaceholder.typicode.com/todos");

  //   // this.fetchToDo();
  // }

  render() {
    const isLoading = false;
    return (
      <div className="ToDoApp">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <ToDoFormContainer />
            <ToDoListContainer />
          </div>
        )}
      </div>
    );
  }
}

export default ToDoApp;