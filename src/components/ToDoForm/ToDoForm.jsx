import React, { Component } from "react";
import "./ToDoForm.css";

class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.addToDo(event.target.value);
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
            this.props.addToDo(input.value);
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
