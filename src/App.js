import "./App.css";
import React, { Component } from "react";
import { CardList } from "./component/Card-List/card-list.component";
import { SearchBox } from "./component/Search Box/Search-Box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
