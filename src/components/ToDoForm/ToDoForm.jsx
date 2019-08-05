import React, { Component } from "react";
import _ from "lodash";

import "./ToDoForm.css";


class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const todo = {
        userId: 1,
        id: _.uniqueId(),
        title: event.target.value,
        completed: false
      };
      this.props.addToDo(todo);
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
            const todo = {
              userId: 1,
              id: _.uniqueId(),
              title: input.value,
              completed: false
            };
            this.props.addToDo(todo);
            input.value = "";
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default ToDoForm;
