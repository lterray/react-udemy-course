import React from 'react';
import classes from "./Cockpit.css";

const cockpit = props => {

  const classesWhenTooFewElements = [];
  if (props.persons.length <= 2) {
    classesWhenTooFewElements.push(classes.danger);
  }
  if (props.persons.length <= 1) {
    classesWhenTooFewElements.push(classes.highlighted);
  }

  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = classes.danger;
  }

  return <div className={classes.Cockpit}>
    <h1>User manager</h1>
      <p className={classesWhenTooFewElements.join(' ')}>This is really working!</p>
      <button onClick={props.click} className={buttonClass}>
        Toggle persons
      </button>
  </div>
};

export default cockpit;