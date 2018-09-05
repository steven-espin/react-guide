import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxcomponent from '../../../hoc/auxcomponent';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log("[Person.js] : constructor()", props);
      }

    render () {
        console.log("[Person.js] : render()")
        return (
            <Auxcomponent>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxcomponent>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);