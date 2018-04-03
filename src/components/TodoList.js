import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    let todos = this.grabLocalStorage();
    this.state = {
      todos,
      newTodo: '', 
    }
  }

  grabLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  pushToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  addTodo = (event) => {
    event.preventDefault();
    let todoObject = {'text': this.state.newTodo, 'completed': false}
    let todos = this.state.todos;
    todos.push(todoObject);
    this.setState({
      todos: todos,
      newTodo: ''
    });
    this.pushToLocalStorage(todos);
  }

  removeTodo = (index) => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({
      todos: todos,
      newTodo: '',
    });
    this.pushToLocalStorage(todos);
  }

  handleChange = (event) => {
    this.setState({
        newTodo: event.target.value,
    }); 
 }

  toggleTodoCompleted = (index) => {
    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos: todos,
      newTodo: '',
    });
    this.pushToLocalStorage(todos);
  } 

  render() {
    return (
      <div>
       <form onSubmit={this.addTodo}>
         <input className="textBox" type="text" onChange={this.handleChange} 
          placeholder="Add a new task!" value={this.state.newTodo}/>
       </form> 
       {this.state.todos.map((item, index) => {
           return <Todo toggleTodoCompleted={this.toggleTodoCompleted} 
                  removeTodo={this.removeTodo} key={index}
                  todo={item} index={index}/>
       })}
      </div>
    );
  }
}

export default TodoList;