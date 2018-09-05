import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from "../hoc/withClass";
import Auxcomponent from "../hoc/auxcomponent";

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log("[App.js] : constructor()", props);
  }

  componentDidUpdate() {
    console.log("App.js : updated");
  }

  state = {
    persons: [
      { id: '01', name: 'Steven', age: 22 },
      { id: '02', name: 'Kevin', age: 23 },
      { id: '03', name: 'Bob', age: 25 }
    ], 
    showPersons: false, 
    toggleClicked: 0
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
    this.setState((prevState, props) => { //use prevState if setState depends on value in state
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }}
    );
  }

  render() {
    console.log("[App.js] : render()")
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
       
    }

    return (
      <Auxcomponent>
        <Cockpit appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </Auxcomponent>
    );
  }
}

export default withClass(App, classes.App);
