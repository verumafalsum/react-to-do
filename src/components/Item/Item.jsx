import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      viewClass: "uncompleted"
    };
  }

  handleCheckbox = event => {
    let checked = event.target.checked;
    let viewClass;
    checked ? viewClass = "completed" : viewClass = "uncompleted";
    this.setState({ checked: checked, viewClass: viewClass });
  };

  deleteToDo = (id) => {
    this.props.deleteToDo(this.props.id)
  }

  render() {
    let input;
    return (
      <div className="Item">
        <div className={"view " + this.state.viewClass}>
          <input
            type="checkbox"
            className="toggle"
            onChange={this.handleCheckbox}
          />
          <label>
            #{this.props.id} {this.props.text}
          </label>
          <button className="destroy" onClick={this.deleteToDo}></button>
        </div>
      </div>
    );
  }
}

export default Item;
