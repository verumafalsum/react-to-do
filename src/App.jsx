import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ToDoApp from "./ToDoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Your name is: {this.props.user}</h2>
        <ToDoApp />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
  }
}

export default connect(mapStateToProps)(App);
