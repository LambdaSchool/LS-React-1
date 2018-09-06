// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <ul>
      {props.todo.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoList;
