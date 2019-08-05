import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import ToDoList from "../../components/ToDoList";
import ToDoForm from "../../components/ToDoForm";
import Loader from "../../components/Loader";
import { addTodo, deleteTodo, fetchTodo } from "../../actions/TodosActions";

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
  //   // TODO: CREATE ACTION FOR LOADING
  //   this.setState({ isLoading: false });

  //   const { fetchTodoAction } = this.props;

  //   fetchTodoAction("https://jsonplaceholder.typicode.com/todos");

  //   // this.fetchToDo();
  // }

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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: todo => dispatch(addTodo(todo)),
    deleteTodoAction: id => dispatch(deleteTodo(id)),
    fetchTodoAction: link => dispatch(fetchTodo(link))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
