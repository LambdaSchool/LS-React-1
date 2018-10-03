import React from "react";
import List from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      toDo: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNewToDo = event => {
    event.preventDefault();
    this.setState({
      toDo: [
        ...this.state.toDo,
        {
          task: this.state[event.target.name],
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  // changeHandler = event => {
  //   console.log(event.target.name);
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // addNewCharacter = event => {
  //   event.preventDefault();
  //   this.setState({
  //     disneyData: [
  //       ...this.state.disneyData,
  //       { characterName: this.state.newCharacter }
  //     ],
  //     newCharacter: ''
  //   });
  // };

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <List toDo={this.state.toDo} />
        <TodoForm
          handleNewToDo={this.handleNewToDo}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
