import React, {useState} from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super(); 
    this.state = [
      {
      task: 'make chicken', 
      id: Date.now(), 
      completed: false
    }, {
      task: 'take a bowl', 
      id: Date.now(), 
      completed: false
    }, ]; 
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

      </div>
    );
  }
}

export default App;
