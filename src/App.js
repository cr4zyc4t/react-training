import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Clock from './Clock';
import Greeting from './Greeting';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCounter: false,
      showClock: false,
    }
  }

  toggleCounter = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock
    })
  }

  counterRef = React.createRef()
  onIncreaseCounterBtnClick = () => {
    if (this.counterRef.current) {
      this.counterRef.current.onButtonClick();
    }
  }

  render() {
    const { showClock, showCounter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ display: "flex", width: "100%", height: 100 }}>
            <div style={{ flex: 1 }}>
              <button onClick={this.toggleCounter}>Toggle Counter</button>
              {showCounter ? <Counter ref={this.counterRef} /> : null}
              <button onClick={this.onIncreaseCounterBtnClick}>Increase Counter</button>
            </div>
            <div style={{ flex: 1 }}>
              <button onClick={this.toggleClock}>Toggle Clock</button>
              {showClock ? <Clock /> : null}
            </div>
            <div style={{ flex: 1 }}>
              <Greeting />
            </div>
          </div>
        </header>
      </div >
    );
  }
}
