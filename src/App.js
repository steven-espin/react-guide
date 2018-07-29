import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Steven', age: '22' },
      { name: 'Kevin', age: '23' },
      { name: 'Bob', age: '25' }
    ]
  }

  swtchNameHandler = () => {
    console.log("clicked...");
    // This won't work to change state: this.state.persons[0].name = 'Max';
    // setState function required to refresh DOM once state is changed.
    // only 2 things refresh DOM, changing state and props
  
    this.setState( {
      persons: [
        { name: 'Max', age: '27' },
        { name: 'Kevin', age: '27' },
        { name: 'Bobby', age: '27' }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a Reactive application!!!</h1>   
        <p>This is really working...</p>
        <button onClick={this.swtchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies: motorcycling</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
