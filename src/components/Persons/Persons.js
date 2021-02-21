import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((person, index) => {
        //maps to an array of jsx objects
        return <Person 
        click={() => props.clicked(index)}
          name={person.name}
          age={person.age} 
          key={person.id}
          //function syntax below is used to pass data
          changed={(event) => props.changed(event, person.id)}/>
          
      });

      export default persons;