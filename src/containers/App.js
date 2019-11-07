import React, { useState } from 'react';
import classes from './App.css';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  let personsContent = null;
  if (showPersons) {
    personsContent = <Persons
                      persons={persons}
                      click={deletePersonHandler}
                      changed={nameChangedHandler}>
                     </Persons>;
  }

  return (
    <div className={classes.App}>
      <Cockpit persons={persons} showPersons={showPersons} click={togglePersonsHandler}></Cockpit>
      {personsContent}
    </div>
  );
}

export default app;
