import React from 'react';
import './App.css'
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor(){
    super();
    this.headers = [
      'Lazy Day Todo\'s',
      'Gettin\' Busy',
      'Full Day, Now You\'ve Gone And Done It',
      'Well There\'s Always Tomorrow'
    ]
    this.state = {
      headerText: this.headers[0],
      todoData: [
        // {
        //   task: 'Test 1',
        //   id: Date.now(),
        //   isCompleted: false
        // }
      ]
    }
  }

  addTask = (task)=>{
    const newTask = {
      task: task,
      id: Date.now(),
      isCompleted: false
    };

    let index = Number.parseInt(this.state.todoData.length / 3, 10);
    index = index >= this.headers.length ? this.headers.length - 1 : index;

    this.setState({
      todoData: [...this.state.todoData, newTask],
      headerText: this.headers[index]
    })
  }

  completeTask = (id)=>{
    let index;
    for(let i = 0; i < this.state.todoData.length; ++i){
      if(this.state.todoData[i].id === id){
        index = i;
      }
    }
    let todoData = [...this.state.todoData];
    todoData[index].isCompleted = !todoData[index].isCompleted;
    this.setState({todoData});
  }

  clearCompleted = ()=>{
    let todoData = this.state.todoData.filter((item)=>{
      return !item.isCompleted;
    })

    this.setState({todoData});
  }

  render() {
    return (
      <div>
        <h1>{this.state.headerText}</h1>
        <TodoList todoData={this.state.todoData} completeTask={this.completeTask}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
