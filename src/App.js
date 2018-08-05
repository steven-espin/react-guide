import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Steven', age: '22' },
      { name: 'Kevin', age: '23' },
      { name: 'Bob', age: '25' }
    ], 
    showPersons: false
  }

  swtchNameHandler = (newName) => {
    console.log("clicked...");
    // This won't work to change state: this.state.persons[0].name = 'Max';
    // setState function required to refresh DOM once state is changed.
    // only 2 things refresh DOM, changing state and props
  
    this.setState( {
      persons: [
        { name: newName, age: '27' },
        { name: 'Kevin', age: '27' },
        { name: 'Bobby', age: '27' }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: '27' },
        { name: 'Kevin', age: '23' },
        { name: 'Bobby', age: '25' }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.swtchNameHandler.bind(this, 'Nacho')}
            changed={this.nameChangedHandler}/>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.swtchNameHandler.bind(this, 'Honcho')}>my hobbies: motorcycling</Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I'm a Reactive application!!!</h1>   
        <p>This is really working...</p>
        <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button> 
        {persons}
      </div>
    );
  }
}

export default App;
