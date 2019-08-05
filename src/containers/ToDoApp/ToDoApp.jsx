import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import ToDoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";
import Loader from "../../components/Loader";
import { addTodo, deleteTodo } from "../../actions/TodosActions";

import "./ToDoApp.css";

//TODO: https://jsonplaceholder.typicode.com/
class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
    
  //   this.fetchToDo();
  // }

  // sleep = (time) => {
  //     return new Promise(resolve => setTimeout(resolve, time));
  // }

  // fetchToDo = async () => {
  //   await this.sleep(2000);
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
  // };

  render() {
    const isLoading = this.state.isLoading;
    const { addTodoAction, deleteTodoAction, todos } = this.props;
    return (
      <div className="ToDoApp">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <ToDoForm addToDo={addTodoAction} />
            <ToDoList
              className="main"
              todos={todos.list}
              deleteTodo={deleteTodoAction}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    todos: store.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: todo => dispatch(addTodo(todo)),
    deleteTodoAction: id => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
