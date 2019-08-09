import React, { Component } from "react";

import "./ToDoForm.css";

// TODO: Refactor it. Create container for component.
class ToDoForm extends Component {
  render() {
    let input;
    return (
      <div className="ToDoForm">
        <input
          className="new-todo"
          placeholder="What shall we do?"
          type="text"
          ref={e => (input = e)}
          onKeyPress={this.props.handleKeyPress}
        />
        <button
          onClick={() => this.props.onClickAdd(input) }
        >
          Add
        </button>
      </div>
    );
  }
}

export default ToDoForm;
