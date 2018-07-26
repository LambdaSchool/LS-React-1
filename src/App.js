import React from "react";

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const myArr = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: myArr,
      todo: ""
    };
  }

  handleUpdateState = (event) => {
    event.preventDefault();
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.todo,
      id: Date.now(),
      completed: false
    });
    // push our new animal item into the todoData array.
    this.setState({ todoData, todo: '' });

    // FROM REACT API the ONLY way to change state.
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
  };

  // toggle completed todos
  toggleCompletedTasks = id => {
    // use slice to return a shallow copy of the array
    let todoData = this.state.todoData.slice();
    todoData = todoData.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      }
      else {
        return task;
      }
    })
    this.setState({todoData})
    // console.log("ID", id);
    // todoData = todoData.map(task => {
    //   console.log("todo.id", task.id)
    //   console.log("task.completed", task.completed)
    // })
  }

  clearCompletedTasks = event => {
    event.preventDefault();
    // use return copy of todoData as to not
    // modify the original
    let todoData = this.state.todoData.slice();
    todoData = todoData.filter(task => !task.completed);
    this.setState({ todoData })

  }
  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList 
          handleToggleComplete={this.toggleCompletedTasks}
          todoArray={this.state.todoData} 
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.handleInputChange}
          handleAddTodo={this.handleUpdateState}
          handleClearTodos={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
