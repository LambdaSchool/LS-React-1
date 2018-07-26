import React from 'react';
import {ToDoInput, ToDoButton, ClearCompletedButton} from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const Todos=[];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      list: Todos
    }
  }
  addTodos=()=>{
    const list=this.state.list;
    list.push({
      'task': document.querySelector('.input-field').value,
      'id':Date.now(),
      'completed':false
    });
    this.setState({list:list});
    document.querySelector('.input-field').value='';
  }
  completedTask=event=>{
    event.target.classList.toggle('completed');
    const list=this.state.list;
    for (let i=0; i<list.length; i++) {
    if (list[i]['task']===event.target.textContent){
      list[i]['completed']=true;
      this.setState({list:list});
    }
  }
  }
  render() {
    return (
      <div>
        <div onKeyPress={ (e) => {if (e.key === 'Enter') {this.addTodos()}}}><ToDoInput/></div>
        <ClearCompletedButton />
        <div onClick={this.addTodos}><ToDoButton /></div>
        <div onClick={this.completedTask}><TodoList taskProp={this.state.list} /></div>
      </div>
    );
  }
  
}

export default App;
