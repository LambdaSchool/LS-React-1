import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./css/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      complete: false,
      input: "",
      style: { textDecoration: "none" },
      className: "todoCard"
    };
  }

  // submits the task and renders to list
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {
          input: this.state.input,
          complete: this.state.complete,
          id: Date.now(),
          className: this.state.className
        }
      ],
      input: ""
    });
  };

  // keeps track of change happening in input
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  // clear lists with a true bool
  handleClear = () => {
    this.setState(
      state =>
        (state.todo = this.state.todo.filter(filter => {
          return filter.complete === false;
        }))
    );
  };

  // handles event when task is clicked
  handleComplete = e => {
    this.state.todo.map(list => {
      return (list.complete =
        Number(list.id) === Number(e.target.id)
          ? !list.complete
          : list.complete);
    });

    const completedClass = this.state.todo.map(list => {
      return (list.className =
        list.complete === true ? "todoCard completed" : "todoCard");
    });
    this.setState({ className: completedClass });
  };

  render() {
    const { input, id, complete, style } = this.state;
    return (
      <div className="container">
        <TodoForm
          input={input}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <TodoList
          todo={this.state.todo}
          complete={this.state.complete}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
