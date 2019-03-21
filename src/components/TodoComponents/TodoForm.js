import React from 'react';




const TodoForm = (props) => {
    
    return (
        <div className="Todo-Form">
            <form>
                <input
                onChange={props.handle}
                type="text" 
                name="inputText"
                
                value={props.value}
                />
                <button className="Add" onClick={props.submit}>Add</button>
                <button className="Clear" onClick={props.clearTodos}>Clear</button>
            </form>
        </div>
    )
}
export default TodoForm;
