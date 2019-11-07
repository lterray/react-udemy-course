import React from 'react';
import classes from './Person.css';

const person = props => {
  // if (Math.random() > 0.8) {
  //   throw Error("jajjja jjajajaaajjj");
  // }
  return (
      <div className={classes.Person}>
        <p onClick={props.click}>
          I'm a person, {props.name} {props.age}
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={(event) => props.changed(event, props.personId) } value={props.name}/>
      </div>
  );
}

export default person;
