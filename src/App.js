import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "2k356kjnk2j",
        },
        {
          name: "Frank",
          id: "2k3jnb45k2j",
        },
        {
          name: "Jacky",
          id: "ds987f6nb45k2j",
        },
        {
          name: "Cristian",
          id: "4h65ht45k2jdg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ); 
        })}
      </div>
    );
  }
}

export default App;
