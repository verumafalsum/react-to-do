import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { switchTodoCompleted } from "../../actions/TodosActions";

import Item from "../../components/Item";

class ItemContainer extends Component {
  handleCheckbox = event => {
    let completed = event.target.checked;
    this.props.switchTodoCompleted(this.props.id, completed);
  };
  deleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  };
  render() {
    let { ...props } = this.props;
    return <Item {...props} handleCheckbox={this.handleCheckbox} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ switchTodoCompleted }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ItemContainer);
