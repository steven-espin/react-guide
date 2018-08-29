import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component  { 
    constructor (props) {
        super(props);
        console.log("[Persons.js] : constructor()", props);
      }
    
      componentWillMount() {
        console.log("[Persons.js] : componentWillMount()");
      }
    
      componentDidMount() {
        console.log("[Persons.js] : componentDidMount()")
      }

      componentWillReceiveProps(newProps) {
        console.log("[Persons.js] : componentWillReceiveProps()", newProps);
      }

      shouldComponentUpdate(newProps, newState) {
        console.log("[Persons.js] : shouldComponentUpdate()", newProps, newState);
        return newProps.persons !== this.props.persons || newProps.clicked !== this.props.clicked || 
            newProps.changed !== this.props.changed; 
      }

      componentWillUpdate(newProps, newState) {
        console.log("[Persons.js] : componentWillUpdate()", newProps, newState);
      }

      componentDidUpdate() {
        console.log("[Persons.js] : componentDidUpdate()");
      }

    render() {
        console.log("[Persons.js] : render()")
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
            } );
    }
}

export default Persons;