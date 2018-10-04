import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todoData: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
          textDecoration: 'none'
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
          textDecoration: 'none'
        }
      ],
      newTask: '',
    }
  }

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
};

strikeThrough = index => {
  this.setState({
    todoData: this.state.todoData.map((item, indx) => {
      if(index !== indx) {
        return item;
      } else {
        return {
          ...item,
          textDecoration: item.textDecoration === 'none' ? 'strikeThrough' : 'none'
        };
      }
    })
  })
}

// clearCompleted = index => {
//   this.setState({
//     todoData: this.state.todoData.filter((item, indx) => {
//       if (index !== indx) {
//         return item;
//       } else {
//         return null;
//       }
//     })
//   })
// }


addNewTodo = event => {
  event.preventDefault();
  this.setState({
    todoData :[
      ...this.state.todoData,
      { task : this.state.newTask, id: Math.floor(Math.random()*1000000), completed: false, textDecoration: 'none' }
    ],
    newTask: ''
  });
};

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To-do List:</h2>
        <TodoForm
          todoData={this.state.todoData}
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTask={this.state.newTask}
          clearCompleted={this.clearCompleted}
          strikeThrough={this.strikeThrough}
          />
      </div>
    );
  }
}

export default App;
