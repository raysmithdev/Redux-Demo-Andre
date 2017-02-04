import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserWidget from './containers/UserWidget'
import { connect } from 'react-redux'
import { changeName } from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserWidget />
        </div>
        <button onClick={() => this.props.update('Andre')}>Click me!</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (name) => dispatch(changeName(name))
  }
}

export default connect(null, mapDispatchToProps)(App);
