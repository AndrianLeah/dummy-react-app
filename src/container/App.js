import React, { Component, Fragment } from "react";
import withClass from "../hoc/withClass";
import Cockpit from "./../components/Cockpit/Cockpit";
import Persons from "./../components/Persons/Persons";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Andrian", age: 23 },
      { id: 2, name: "Max", age: 28 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    changeCounter: 0
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // setState is asynchronous so you need to use this
    // when your state update depends on your old state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Fragment>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
