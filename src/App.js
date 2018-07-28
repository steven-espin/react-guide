import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a Reactive application!!!</h1>   
        <p>This is really working...</p>
        <Person name='Steven' age='22'/>
        <Person name='Kevin' age='23'>my hobbies: motorcycling</Person>
        <Person name='Bob' age='25'/>
      </div>
    );
  }
}

export default App;
