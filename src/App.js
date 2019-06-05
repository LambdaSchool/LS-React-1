import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Code",
          id: Date.now(),
          completed: false
        },
        {
          task: "More Code",
          id: Date.now(),
          completed: false
        }
      ],
      // todo = ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm />
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
