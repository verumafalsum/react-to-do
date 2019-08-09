import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../../actions/TodosActions";
import ToDoForm from "../../components/ToDoForm";

class ToDoFormContainer extends Component {
  handleKeyPress = event => {
    if (event.key === "Enter" && event.target.value) {
      const todo = {
        userId: 1,
        id: _.uniqueId(),
        title: event.target.value,
        completed: false
      };
      this.props.addTodo(todo);
      event.target.value = "";
    }
  };
  onClickAdd = input => {
    if (input.value) {
      const todo = {
        userId: 1,
        id: _.uniqueId(),
        title: input.value,
        completed: false
      };
      this.props.addTodo(todo);
      input.value = "";
    }
  };

  render() {
    return (
      <ToDoForm
        handleKeyPress={this.handleKeyPress}
        onClickAdd={this.onClickAdd}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ToDoFormContainer);
