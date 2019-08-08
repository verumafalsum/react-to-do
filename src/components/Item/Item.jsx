import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    let { deleteTodo, handleCheckbox, id, completed, title } = this.props;
    return (
      <div className="Item">
        <div className={completed ? "view completed" : "view"}>
          <input
            type="checkbox"
            className="toggle"
            onChange={handleCheckbox}
            checked={completed}
          />
          <label>
            #{id} {title}
          </label>
          <button className="destroy" onClick={() => deleteTodo(id)} />
        </div>
      </div>
    );
  }
}

export default Item;
