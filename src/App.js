import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Counter from './pages/Counter';
import Clock from './pages/Clock';
import Greeting from './pages/Greeting';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to="/counter">Counter</NavLink>
              <NavLink to="/clock">Clock</NavLink>
              <NavLink to="/greeting">Greeting</NavLink>
            </nav>
          </header>
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/counter" component={Counter} />
              <Route path="/clock" component={Clock} />
              <Route path="/greeting" component={Greeting} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
