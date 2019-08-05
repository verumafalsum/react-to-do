import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      viewClass: "uncompleted"
    };
  }

  componentDidMount() {
    if (this.props.completed) {
        this.setState({ completed: true, viewClass: "completed" });
    }
  }

  handleCheckbox = event => {
    let completed = event.target.checked;
    let viewClass;
    completed ? viewClass = "completed" : viewClass = "uncompleted";
    this.setState({ completed: completed, viewClass: viewClass });
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
            checked={this.state.completed}
          />
          <label>
            #{this.props.id} {this.props.title}
          </label>
          <button className="destroy" onClick={this.deleteToDo}></button>
        </div>
      </div>
    );
  }
}

export default Item;
