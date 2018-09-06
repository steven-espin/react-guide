import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxcomponent from '../../../hoc/auxcomponent';
import { AuthContext } from '../../../Containers/App';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log("[Person.js] : constructor()", props);
        this.inputElement = React.createRef();
      }

      componentDidMount() {
          if(this.props.position === 0) {
            this.inputElement.current.focus();
          }
      }

      focus() {
          this.inputElement.current.focus();
      }

    render () {
        console.log("[Person.js] : render()")
        return (
            <Auxcomponent>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
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

export default Person;