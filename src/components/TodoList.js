import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	console.log(props.tasks, 'props.tasks in TodoList');
	return (
		<div>
			<h3>My To-Do List</h3>
			<hr />
			<ul>
				{props.tasks.map(task => (
					<Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
