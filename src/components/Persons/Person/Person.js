import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import withClass from "./../../../hoc/withClass";

const person = props => {
  /* Fake Custom Error   
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }
 */
  return (
    <Fragment>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Fragment>
  );
};

// This is how you define prop types for distributed components
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(person, classes.Person);
