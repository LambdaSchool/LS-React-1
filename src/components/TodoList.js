// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {  

        return (
            <div className="listDiv">
                {props.data.map ( item => (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
                ))}

            <button className ="removeBtn" onClick={props.removeItem}>
                Remove Completed To-dos
            </button>
            </div>
        )
    }

export default TodoList;
