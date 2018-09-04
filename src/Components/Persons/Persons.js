import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent  { 
    constructor (props) {
        super(props);
        console.log("[Persons.js] : constructor()", props);
      }
    
      componentDidUpdate() {
        console.log("[Persons.js] : updated");
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