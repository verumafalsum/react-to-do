import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToDoList from "../ToDoListContainer/ToDoListContainer";
import ToDoForm from "../../components/ToDoForm";
import Loader from "../../components/Loader";
import { addTodo } from "../../actions/TodosActions";

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
    const { addTodo } = this.props;
    return (
      <div className="ToDoApp">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <ToDoForm addTodo={addTodo} />
            <ToDoList className="main" />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ToDoApp);
