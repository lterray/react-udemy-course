import React, { useEffect } from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = props => {
  useEffect(() => {
    console.log("Persons component is rendered the first time");
    return () => {
      console.log("Persons component is unmounted");
    }
  }, []);

  useEffect(() => {
    console.log("Persons component is re-redered");
  });

  return <div>
      { props.persons.map((person, index) => {
        return <ErrorBoundary>
          <Person
            key={person.id}
            personId={person.id}
            name={person.name}
            age={person.age}
            click={() => props.click(index)}
            changed={props.changed}>
            {person.hobby}
          </Person>
        </ErrorBoundary>
      })}
    </div>;
}

function areEqual(prevProps, nextProps) {
  return prevProps.persons == nextProps.persons;
}

export default React.memo(persons, areEqual);