import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this works and stuff</p>
        <Person />
      </div>
    ); 
   // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!')
  }
}

export default App;
