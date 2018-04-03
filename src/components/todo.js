import React from 'react';

const Todo = props => {
  return (
    <div>
    {props.toDos.map((todo, index) => (
      <div key={index + todo}>{todo}</div>
    ))}
  </div>)
};

export default Todo;
