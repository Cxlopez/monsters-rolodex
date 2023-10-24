import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Cristian'
    }
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
            <button>
              Change Name
            </button>
        </header>
      </div>
    );
  }

  
}

export default App;
