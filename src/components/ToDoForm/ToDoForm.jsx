import React, { Component } from "react";
import _ from "lodash";

import "./ToDoForm.css";


class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  handleKeyPress = (event) => {
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
  }

  render() {
    let input;
    return (
      <div className="ToDoForm">
        <input
          className="new-todo"
          placeholder="What shall we do?"
          type="text"
          ref={e => input = e}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={() => {
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
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default ToDoForm;
