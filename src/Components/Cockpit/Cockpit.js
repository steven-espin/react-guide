import React from 'react';
import classes from './Cockpit.css';
import Auxcomponent from '../../hoc/auxcomponent';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Auxcomponent>
            <h1>{props.appTitle}</h1>   
            <p className={assignedClasses.join(' ')}>This is really working...</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button> 
        </Auxcomponent>
    );
}

export default Cockpit;