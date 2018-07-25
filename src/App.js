import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
	constructor(){
		super();
		this.state = {todo: [], current: ''}
	}

	handleInputChange = event => {
		this.setState({current: event.target.value});
	}

	addTodo = (event, prevState) => {
		event.preventDefault();
		let clear = document.querySelector('.toDoForm input');
		clear.value = '';
		let newList = this.state.todo.slice();
		let newItem = {task: this.state.current, id: Date.now(), completed: false};
		newList.push(newItem);
		this.setState({todo: newList, current: ''})
	}

	completeTask = event => {
		event.target.style.textDecoration = 'line-through';
		let newList = this.state.todo.slice();
		for (let todo in newList){
			if (newList[todo].task === event.target.innerText && newList[todo].id === Number(event.target.dataset.id)){
				newList[todo].completed = true;
			}
		}
		this.setState({todo: newList});
	}

	removeCompleted = () => {
		if (this.state.todo.length > 0) {
			let text = document.querySelector('.toDoContainer p');
			text.style.textDecoration = 'none';
		}
		let currentList = this.state.todo.slice();
		let newList = currentList.filter(todo => todo.completed === false);
		this.setState({todo: newList});
	}

	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<TodoList list={this.state.todo} onChange={this.handleInputChange} onSubmitButton={this.addTodo} onClear={this.removeCompleted} completeTask={this.completeTask} />
		);
	}
}

export default App;
