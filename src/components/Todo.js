import React from 'react';

const Todo = props => {
    return <div>{props.todo.text}</div>
}

export default Todo; // exported as default because we are pulling it in as a default
