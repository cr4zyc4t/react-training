import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const counter = this.state.counter;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter
            counter={counter}
            onButtonClick={this.increaseCounter}
          />
        </header>
      </div>
    );
  }
}
