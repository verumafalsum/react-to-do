import React, { Component } from "react";
import Item from "../../components/Item";

class ItemContainer extends Component {
  deleteTodo = () => {
    this.props.deleteTodo(this.props.id);
  };
  render() {
    let { ...props } = this.props;
    return <Item {...props} />;
  }
}

export default ItemContainer;
