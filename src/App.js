import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Clock from './Clock';
import Greeting from './Greeting';
import RandomList from './RandomList';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <NavLink to="/counter">Counter</NavLink>
              <NavLink to="/clock">Click</NavLink>
              <NavLink to="/greeting">Greeting</NavLink>
              <NavLink to="/list">List</NavLink>
            </nav>

          </header>
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={() => <div>This is Homepage</div>} />
              <Route path="/counter" component={Counter} />
              <Route path="/clock" component={Clock} />
              <Route path="/greeting" component={Greeting} />
              <Route path="/list" component={RandomList} />
              <Route component={() => <div>Error 404 - Page not found</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
