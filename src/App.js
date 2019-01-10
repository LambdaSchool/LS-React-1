import React from 'react';

import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import Moment from 'moment';
import Fuse from 'fuse.js';

class App extends React.Component {
  constructor() {
    super();

    const todos = JSON.parse(localStorage.getItem("todos")) || [
      {
        _id: "1528817077286",
        dateCreated: "June 22, 2001 - 12:00 AM",
        task: 'Organize Garage',
        completed: false
      },
      {
        _id: "1528817084358",
        dateCreated: "November 2, 1966 - 12:00 AM",
        task: 'Bake Cookies',
        completed: false
      }
    ];

    this.state = {
      todos,
      queriedTodos: todos,
      currentTodoInput: "",
      searchQuery: ""
    }

    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(e) {
    this.setState({ 
        todos: [...this.state.todos, {
          id: String(Date.now()),
          dateCreated: Moment().format("MMMM D, YYYY - LT"),
          task: this.state.currentTodoInput,
          completed: false,
        }],
        currentTodoInput: ""
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  searchTodos(searchQuery) {
    this.setState({
      queriedTodos: searchQuery === "" ? this.state.todos : new Fuse(this.state.todos, {
        threshold: 0.1,
        location: 0, 
        keys: ["task"]
      }).search(searchQuery)
    });
  }

  toggleCompletedTodo(e) {
    const todoList = this.state.todos;
    
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i]._id === e.currentTarget.dataset.id) {
        todoList[i].completed = !todoList[i].completed;
        break;
      }
    }

    this.setState({
      todos: todoList
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  removeCompletedTodos(e) {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
  }

  handleChange = e => {
    const input = e.currentTarget.dataset.input;
    
    switch(input) {
      case 'new-todo-textarea' :
        this.setState({currentTodoInput: e.currentTarget.value});
        break;
      case 'todo-search' :
        this.setState({searchQuery: e.currentTarget.value});
        this.searchTodos(e.currentTarget.value);
        break;
    }
  }

  handleClick = e => {
    const button = e.currentTarget.dataset.button;
    
    switch(button) {
      case 'todo-add' :
        this.addTodo(e);
        break;

      case 'toggle-completed' :
        this.toggleCompletedTodo(e);
        break;

      case 'remove-completed-todos' :
        this.removeCompletedTodos(e);
        break;
    }
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="todo-main-header">Todo App</h1>
        <TodoForm 
          currentTodoInput={this.state.currentTodoInput}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
        <TodoList 
          todoList={this.state.queriedTodos}
          handleChange={this.handleChange}
          handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
