import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  update() {
    this.setState(prevState => {
      return {
        todos: prevState.newTodo.length
          ? [...prevState.todos, prevState.newTodo]
          : [...prevState.todos],
        newTodo: ""
      };
    });
  }

  addTodo(e) {
    !!e.target ? this.setState({ newTodo: e.target.value }) : "";

    this.update();
    e.preventDefault();
    !!e.target ? (e.target.value = "") : "";
  }

  render() {
    return (
      <div>
        <input onKeyPress={e => (e.key === "Enter" ? this.addTodo(e) : "")} />
        {this.state.todos.map((todo, i) => <Todo todo={todo} key={i} />)}
      </div>
    );
  }
}

export default TodoList;
