import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ToDoApp from "./ToDoApp/ToDoApp";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <h2>Your name is: {user.name}</h2>
        <ToDoApp />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(App);
