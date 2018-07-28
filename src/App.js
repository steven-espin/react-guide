import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a Reactive application!!!</h1>   
        <p>This is really working...</p>
        <Person />
      </div>
    );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im a rect app'));
  }
}

export default App;
