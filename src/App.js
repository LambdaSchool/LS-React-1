import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [ ],
      inputText: '',
    }
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todo: [...this.state.todo, this.state.inputText],
        inputText: ''
      });
    };
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>ToDo List: MVP</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
