import React from 'react';
import './App.css';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: 'false'
        }
      ],
      list: ''
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addButton = () => {
    const toDoList = this.state.todos.slice();

    toDoList.push({ task: this.state.list, completed: false, id: Math.random() });
    this.setState({ todos: toDoList, list: '' });
  }

  render() {
    return (
      <div className='app-container'>
        <h1>Todo List: MVP</h1>
        <TodoList toDoList={this.state.todos} />
        <TodoForm value={this.state.list} onChange={this.handleInputChange} addButton={this.addButton} />
      </div>
    );
  }
}

export default App;
