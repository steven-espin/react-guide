import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '01', name: 'Steven', age: '22' },
      { id: '02', name: 'Kevin', age: '23' },
      { id: '03', name: 'Bob', age: '25' }
    ], 
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //create copy of state, rather than mutating state directly.
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person key={person.id} 
                  name={person.name} 
                  age={person.age} 
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello, I'm a Reactive application!!!</h1>   
        <p className={assignedClasses.join(' ')}>This is really working...</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}
      </div>
    );
  }
}

export default App;
