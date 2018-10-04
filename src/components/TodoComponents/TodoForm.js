import React from 'react';

function TodoForm(props) {
  return (
    <div className='todo-form'>
      <form onSubmit={props.addNewTodo}>
        <input 
          type='text'
          name='inputText'
          placeholder='New To Do'
          onChange={props.changeText}
          value={props.inputText}
        />
        <button type='submit'>Add Todo</button>
      </form>

      <button>Clear Completed</button>
    </div>
  );
}

export default TodoForm;