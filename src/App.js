import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/SearchBox.component";

class App extends Component {
  state = {
    monsters: [],
    searchValue: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }
  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <center>
          <h1>Monster Rolodex</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={e => this.setState({ searchValue: e.target.value })}
          />
        </center>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
