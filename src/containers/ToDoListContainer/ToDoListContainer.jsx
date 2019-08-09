import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/TodosActions";
import { bindActionCreators } from "redux";
import ItemContainer from "../ItemContainer/ItemContainer";

import "./ToDoListContainer.css";

class ToDoListContainer extends Component {
  render() {
    const { todos, deleteTodo } = this.props;
    return (

      <div className="ToDoList">
        {todos.list.map(todo => (
          <ItemContainer
            title={todo.title}
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteTodo }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);
