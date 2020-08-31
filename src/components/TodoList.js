// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

  render() {
    return (
      <div>
        <h1>Todos</h1> <button onClick={this.props.clearAll}>Clear all</button>
        <p>
          {this.props.todos.map(todo => <Todo todo={todo} key={todo.id} markComplete={this.props.markComplete} />)}
        </p>
      </div>
    )
  }
}
