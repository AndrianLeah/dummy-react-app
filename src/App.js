import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Andrian", age: 23 },
      { id: 2, name: "Max", age: 28 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "#2ecc71",
      color: "white",
      font: "inherit",
      border: "1px solid #27ae60",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "#e74c3c";
      style.border = "1px solid #c0392b";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
