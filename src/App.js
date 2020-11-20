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
  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    //DO NOT DO THIS ... this.state.persons[0].name = "EDWARDS!!";
    this.setState({
      //this react component method compares the 2 states and mutates accordingly
      // merges the old with the new
      // react recognizes that the state changes - so it re renders the DOM
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 21}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this works and stuff</p>
        <button onClick={() => this.switchNameHandler("Edwilliam!")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'EDDDD')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    ); 
   // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!')
  }
}

export default App;


/*
///////////////
// HOOKS EXAMPLE
///

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  //useState always returns an array with 2 elements
  // first element is the current state passed in
  // second is a function that will re render the component
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
  ]
});

//you are allowed to have AS MANY useState() calls as you want/need

const [otherState, setOtherState] = useState('some other value');

console.log(personsState, otherState);

const switchNameHandler = () => {
  //console.log("Was clicked!");
  //DO NOT DO THIS ... this.state.persons[0].name = "EDWARDS!!";
  setPersonsState({
    //THIS FUNCTION REPLACES THE OLD STATE
    //this react component method compares the 2 states and mutates accordingly
    // merges the old with the new
    // react recognizes that the state changes - so it re renders the DOM
    persons: [
      {name: 'Edward', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 21}
    ],
    //ensures we keep all data since our state is changed, and not merged with the old state
    otherState: 'some other value'
  }) 
}

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this works and stuff</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    ); 
   // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!')

}

export default app;

/*
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
*/