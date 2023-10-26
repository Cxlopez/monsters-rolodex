import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstName: 'Cristian', lastName: 'Sanchez-Lopez'},
      company: 'LHL',
    }
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.copmany}
          </p>
            <button onClick={() => {
              this.setState({ name: "Estuardo" });
            }}>
              Change Name
            </button>
        </header>
      </div>
    );
  }

  
}

export default App;
