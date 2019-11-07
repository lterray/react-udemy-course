import React, { useState } from 'react';
import classes from './App.css';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from "./Person/Person";


const app = props => {
  const [persons, setPersons] = useState([
      {id: 1, name: "Laci", age: 37, hobby: "cooking"},
      {id: 2, name: "Mesi", age: 1, hobby: "eating"},
      {id: 3, name: "Kata", age: 34, hobby: "coffee"}
    ]);
  const [showPersons, setShowPersons] = useState(false);

  const switchNameHandler = (newName) => {
    const newPersons = [...persons];
    newPersons[0].name = newName;
    setPersons(newPersons);
  }

  const nameChangedHandler = (event, personId) => {
    const newPersons = [...persons];
    const personToChangeIndex = newPersons.findIndex(person => person.id === personId);
    newPersons[personToChangeIndex] = {...newPersons[personToChangeIndex], name: event.target.value};
    setPersons(newPersons);
  };

  const deletePersonHandler = (personIndex) => {
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  let buttonClass = '';

  let personsContent = null;
  if (showPersons) {
    buttonClass = classes.danger;

    personsContent = (
      persons.map((person, index) => {
        return <ErrorBoundary>
          <Person
            key={person.id}
            personId={person.id}
            name={person.name}
            age={person.age}
            click={() => deletePersonHandler(index)}
            changed={nameChangedHandler}>
            {person.hobby}
          </Person>
        </ErrorBoundary>
      })
    );
  }

  const classesWhenTooFewElements = [];
  if (persons.length <= 2) {
    classesWhenTooFewElements.push(classes.danger);
  }
  if (persons.length <= 1) {
    classesWhenTooFewElements.push(classes.highlighted);
  }

  return (
    <div className={classes.App}>
      <h1>Hi I'm a react app.</h1>
      <p className={classesWhenTooFewElements.join(' ')}>This is really working!</p>
      <button onClick={togglePersonsHandler} className={buttonClass}>
        Toggle persons
      </button>
      {personsContent}
    </div>
  );
}

export default app;
