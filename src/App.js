import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //managing compents internal data
  state = {
    //WHEN STATE CHANGES IT RE RENDERS THE DOM
    //state allows you to manage anything about the object you desire
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  //"Handler" naming convntion denotes that it is a function that is not called, but handles an event
  switchNameHandler = () => {
    //console.log("Was clicked!");
    //DO NOT DO THIS ... this.state.persons[0].name = "EDWARDS!!";
    this.setState({
      //this react component method compares the 2 states and mutates accordingly
      // merges the old with the new
      // react recognizes that the state changes - so it re renders the DOM
      persons: [
        {name: 'Edward', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 21}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this works and stuff</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    ); 
   // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!')
  }
}

export default App;
