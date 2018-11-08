// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = props => {
  return (
    <div className="todoContainer">
      <h1>Todo List: MVP</h1>
      {props.todoList.map(todo => (
        <Todo
          todoList={todo.todoList}
          key={todo.id = Math.random().toString()}
          todoListItem={todo.task}
          completed={todo.completed}
          toggleCompleted={todo.toggleCompleted}
        />
      ))
      }
    </div>
  )
}

export default TodoList;
