import React, { Component, Fragment } from "react";
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
          <button className="destroy"></button>
        </div>
      </div>
    );
  }
}

export default Item;
