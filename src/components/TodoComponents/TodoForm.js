import React from 'react';

const TodoForm = props => {

    return(
        <form onSubmit={props.AddTodo}>
            <input type="text" />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;